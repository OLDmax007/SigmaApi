import { IFilteredConditions } from "../interfaces/query.interface";
import { IUser, IUserCreate, IUserUpdate } from "../interfaces/user.interface";
import { User } from "../models/user.model";

class UserRepository {
  public async create(dto: IUserCreate): Promise<IUser> {
    return await User.create(dto);
  }

  public async getByFilters(filters: IFilteredConditions): Promise<IUser[]> {
    return await User.find(filters);
  }

  public async getById(userId: string): Promise<IUser> {
    return await User.findById(userId);
  }

  public async getByEmail(email: string): Promise<IUser> {
    return await User.findOne({ email });
  }

  public async updateById(userId: string, dto: IUserUpdate): Promise<IUser> {
    return await User.findOneAndUpdate({ _id: userId }, dto, { new: true });
  }

  public async deleteById(userId: string): Promise<void> {
    await User.deleteOne({ _id: userId });
  }
}

export const userRepository = new UserRepository();
