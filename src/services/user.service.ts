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
    return await userRepository.getByEmail(email);
  }

  public async update(tokenPayload: ITokenPayload, dto: IUserUpdate) {
    return await userRepository.update(tokenPayload.userId, dto);
  }

  public async delete(tokenPayload: ITokenPayload) {
    return await userRepository.delete(tokenPayload.userId);
  }
}

export const userService = new UserService();
