import { IPost, IPostCreate, IPostUpdate } from "../interfaces/post.interface";
import { Post } from "../models/post.model";

class PostRepository {
  public async create(dto: IPostCreate, userId: string): Promise<IPost> {
    console.log("Creating post with:", { ...dto, userId });
    return await Post.create({ ...dto, userId });
  }

  public async getOneById(postId: string): Promise<IPost> {
    return await Post.findById({ _id: postId });
  }

  public async getAllById(userId: string): Promise<IPost[]> {
    return await Post.find({ userId });
  }

  public async update(postId: string, dto: IPostUpdate): Promise<IPost> {
    console.log(postId)
    return await Post.findByIdAndUpdate({ _id: postId }, dto, { new: true });
  }

  public async delete(postId: string): Promise<void> {
    await Post.deleteOne({ _id: postId.toString() });
  }
}

export const postRepository = new PostRepository();
