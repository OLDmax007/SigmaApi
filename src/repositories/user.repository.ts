import { IUser, IUserCreate, IUserUpdate } from "../interfaces/user.interface";
import { User } from "../models/user.model";

class UserRepository {
  public async create(dto: IUserCreate): Promise<IUser> {
    return await User.create(dto);
  }

  public async getByFilters(query: Partial<IUser>): Promise<IUser[]> {
    return await User.find(query);
  }

  public async getById(userId: string): Promise<IUser> {
    return await User.findById(userId);
  }

  public async getByEmail(email: string): Promise<IUser> {
    return await User.findOne({ email });
  }

  public async update(userId: string, dto: IUserUpdate) {
    return await User.updateOne({ _id: userId }, dto);
  }

  public async delete(userId: string): Promise<void> {
    await User.deleteOne({ _id: userId });
  }
}

export const userRepository = new UserRepository();
