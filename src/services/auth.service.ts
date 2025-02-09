import {
  IUserCreate,
  IUserLogin,
  IUserWithTokens,
} from "../interfaces/user.interface";
import { tokenRepository } from "../repositories/token.repository";
import { userRepository } from "../repositories/user.repository";
import { tokenService } from "./token.service";

class AuthService {
  public async signUp(dto: IUserCreate): Promise<IUserWithTokens> {
    const user = await userRepository.create(dto);
    const tokens = tokenService.generateTokens({
      userId: user._id,
      role: user.role,
    });

    await tokenRepository.create({ ...tokens, userId: user._id });

    return { user, tokens };
  }

  public async signIn(dto: IUserLogin): Promise<IUserWithTokens> {
    const user = await userRepository.getByEmail(dto.email);

    const tokens = tokenService.generateTokens({
      userId: user._id,
      role: user.role,
    });

    await tokenRepository.create({ ...tokens, userId: user._id });

    return { user, tokens };
  }
}

export const authService = new AuthService();
