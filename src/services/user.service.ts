import { ApiError } from "../errors/api.error";
import { buildFilterConditions } from "../helpers/build-filter-conditions.helper";
import { IQueryList } from "../interfaces/query.interface";
import { ITokenPayload } from "../interfaces/token.interface";
import { IUser, IUserUpdate } from "../interfaces/user.interface";
import { tokenRepository } from "../repositories/token.repository";
import { userRepository } from "../repositories/user.repository";

class UserService {
  public async getByFilters(query: IQueryList): Promise<IUser[]> {
    const filters = buildFilterConditions(query);
    return await userRepository.getByFilters(filters);
  }
  public async getById(userId: string): Promise<IUser> {
    return await userRepository.getById(userId);
  }

  public async getByEmail(email: string): Promise<IUser> {
    const user = await userRepository.getByEmail(email);
    if (!user) {
      throw new ApiError("User not found", 400);
    }
    return user;
  }

  public async update(
    tokenPayload: ITokenPayload,
    dto: IUserUpdate
  ): Promise<IUser> {
    return await userRepository.update(tokenPayload.userId, dto);
  }

  public async delete(tokenPayload: ITokenPayload): Promise<void> {
    await Promise.all([
      tokenRepository.deleteOneByParams({ userId: tokenPayload.userId }),
      userRepository.delete(tokenPayload.userId),
    ]);
  }
}

export const userService = new UserService();
