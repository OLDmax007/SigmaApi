import { ApiError } from "../errors/api.error";
import { ITokenPayload } from "../interfaces/token.interface";
import { IUserUpdate } from "../interfaces/user.interface";
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
    const updatedUser = await userRepository.update(tokenPayload.userId, dto);
    return updatedUser;
  }

  public async delete(tokenPayload: ITokenPayload) {
    return await userRepository.delete(tokenPayload.userId);
  }
}

export const userService = new UserService();
