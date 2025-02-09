import { ApiError } from "../errors/api.error";
import { ITokenPayload } from "../interfaces/token.interface";
import { IUserUpdate } from "../interfaces/user.interface";
import { tokenRepository } from "../repositories/token.repository";
import { userRepository } from "../repositories/user.repository";

class UserService {
  public async getByFilters(query) {
    return await userRepository.getByFilters(query);
  }
  public async getById(userId: string) {
    return await userRepository.getById(userId);
  }

  public async getByEmail(email: string) {
    const user = await userRepository.getByEmail(email);
    if (!user) {
      throw new ApiError("User not found", 400);
    }
    return user;
  }

  public async update(tokenPayload: ITokenPayload, dto: IUserUpdate) {
    return await userRepository.update(tokenPayload.userId, dto);
  }

  public async delete(tokenPayload: ITokenPayload) {
    await Promise.all([
      tokenRepository.deleteByParams({ userId: tokenPayload.userId }),
      userRepository.delete(tokenPayload.userId),
    ]);
  }
}

export const userService = new UserService();
