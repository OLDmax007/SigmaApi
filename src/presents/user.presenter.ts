import { IUser, IUserResponse } from "../interfaces/user.interface";

class UserPresenter {
  public toResponse(entity: IUser): IUserResponse {
    const {
      _id,
      firstName,
      lastName,
      age,
      statusMarried,
      gender,
      createdAt,
      updatedAt,
      role,
    } = entity;

    return {
      _id,
      firstName,
      lastName,
      age,
      statusMarried,
      gender,
      role,
      createdAt,
      updatedAt,
    };
  }
}

export const userPresenter = new UserPresenter();
