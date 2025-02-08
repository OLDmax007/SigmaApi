import { IUser, IUserCreate, IUserLogin } from "../interfaces/user.interface";
import { User } from "../models/user.model";

class UserRepository {
  public async singUp(dto: IUserCreate): Promise<IUser> {
    return await User.create(dto);
  }

  public async singIn(dto: IUserLogin): Promise<IUser> {
    return await User.findOne(dto);
  }

  public async getByFilters(filters: Partial<IUser>): Promise<IUser[]> {
    return await User.find(filters);
  }

  public async getById(userId: string): Promise<IUser> {
    return await User.findById(userId);
  }

  public async getByEmail(email: string): Promise<IUser> {
    return await User.findOne({ email });
  }

  public async update() {}

  public async delete() {}
}

export const userRepository = new UserRepository();
