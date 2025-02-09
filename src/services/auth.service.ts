import { ApiError } from "../errors/api.error";
import {
  IUserCreate,
  IUserLogin,
  IUserWithTokens,
} from "../interfaces/user.interface";
import { tokenRepository } from "../repositories/token.repository";
import { userRepository } from "../repositories/user.repository";
import { passwordService } from "./password.service";
import { tokenService } from "./token.service";

class AuthService {
  public async signUp(dto: IUserCreate): Promise<IUserWithTokens> {
    const password = await passwordService.hashPassword(dto.password);
    const user = await userRepository.create({ ...dto, password });

    const tokens = tokenService.generateTokens({
      userId: user._id,
      role: user.role,
    });

    await tokenRepository.create({ ...tokens, userId: user._id });

    return { user, tokens };
  }

  public async signIn(dto: IUserLogin): Promise<IUserWithTokens> {
    const user = await userRepository.getByEmail(dto.email);

    if (!user) {
      throw new ApiError("Entered email is incorrect", 401);
    }

    const isPassword = passwordService.comparePassword(
      user.password,
      dto.password
    );

    if (!isPassword) {
      throw new ApiError("Entered password is incorrect", 401);
    }

    const tokens = tokenService.generateTokens({
      userId: user._id,
      role: user.role,
    });

    await Promise.all([
      tokenRepository.deleteByParams({ userId: user._id }),
      tokenRepository.create({ ...tokens, userId: user._id }),
    ]);

    return { user, tokens };
  }
}

export const authService = new AuthService();
