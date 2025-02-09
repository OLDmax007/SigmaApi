import { ApiError } from "../errors/api.error";
import { ITokenPayload } from "../interfaces/token.interface";
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
      throw new ApiError("Entered email or password is incorrect", 401);
    }

    const isPassword = await passwordService.comparePassword(
      dto.password,
      user.password
    );

    if (!isPassword) {
      throw new ApiError("Entered email or password is incorrect", 401);
    }

    const tokens = tokenService.generateTokens({
      userId: user._id,
      role: user.role,
    });

    await Promise.all([
      tokenRepository.deleteOneByParams({ userId: user._id }),
      tokenRepository.create({ ...tokens, userId: user._id }),
    ]);

    return { user, tokens };
  }

  public async signOut(tokenPayload: ITokenPayload): Promise<void> {
    await tokenRepository.deleteOneByParams({ userId: tokenPayload.userId });
  }

  public async signOutAll(tokenPayload: ITokenPayload): Promise<void> {
    await tokenRepository.deleteAllByParams({ userId: tokenPayload.userId });
  }
}

export const authService = new AuthService();
