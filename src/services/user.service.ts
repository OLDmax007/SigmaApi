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

  public async update() {}

  public async delete() {}
}

export const userService = new UserService();
