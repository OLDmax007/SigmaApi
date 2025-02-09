import { IPost, IPostCreate, IPostUpdate } from "../interfaces/post.interface";
import { IFilteredConditions } from "../interfaces/query.interface";
import { Post } from "../models/post.model";

class PostRepository {
  public async create(dto: IPostCreate): Promise<IPost> {
    return await Post.create(dto);
  }

  public async getByFilters(filters: IFilteredConditions): Promise<IPost[]> {
    return await Post.find(filters);
  }

  public async getById(userId: string): Promise<IPost> {
    return await Post.findById(userId);
  }

  public async getByEmail(email: string): Promise<IPost> {
    return await Post.findOne({ email });
  }

  public async update(PostId: string, dto: IPostUpdate): Promise<IPost> {
    return await Post.findOneAndUpdate({ _id: PostId }, dto, { new: true });
  }

  public async delete(PostId: string): Promise<void> {
    await Post.deleteOne({ _id: PostId });
  }
}

export const postRepository = new PostRepository();
