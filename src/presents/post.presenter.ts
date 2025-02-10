import { IPost, IPostResponse } from "../interfaces/post.interface";

class PostPresenter {
  public toResponse(entity: IPost): IPostResponse {
    const { _id, title, createdAt, updatedAt } = entity;
    return {
      _id,
      title,
      createdAt,
      updatedAt,
    };
  }
}

export const postPresenter = new PostPresenter();
