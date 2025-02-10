import { ApiError } from "../errors/api.error";
import { IPost, IPostCreate, IPostUpdate } from "../interfaces/post.interface";
import { ITokenPayload } from "../interfaces/token.interface";
import { postRepository } from "../repositories/post.repository";

class PostService {
  public async create(
    dto: IPostCreate,
    tokenPayload: ITokenPayload
  ): Promise<IPost> {
    return await postRepository.create(dto, tokenPayload.userId);
  }

  public async getAllById(userId: string): Promise<IPost[]> {
    const posts = await postRepository.getAllById(userId);
    if (!posts) {
      throw new ApiError("Posts not found", 404);
    }

    return posts;
  }

  public async updateById(postId: string, dto: IPostUpdate): Promise<IPost> {
    return await postRepository.updateById(postId, dto);
  }

  public async deleteById(postId: string): Promise<void> {
    const post = await postRepository.getOneById(postId);
    if (!post) {
      throw new ApiError("Post not found", 404);
    }

    await postRepository.deleteById(postId);
  }
}

export const postService = new PostService();
