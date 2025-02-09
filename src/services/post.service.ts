import { buildFilterConditions } from "../helpers/build-filter-conditions.helper";
import { IPost, IPostUpdate } from "../interfaces/post.interface";
import { IQueryList } from "../interfaces/query.interface";
import { ITokenPayload } from "../interfaces/token.interface";
import { postRepository } from "../repositories/post.repository";

class PostService {
  public async getByFilters(query: IQueryList): Promise<IPost[]> {
    const filters = buildFilterConditions(query);
    return await postRepository.getByFilters(filters);
  }
  public async getById(postId: string): Promise<IPost> {
    return await postRepository.getById(postId);
  }

  public async update(
    tokenPayload: ITokenPayload,
    dto: IPostUpdate
  ): Promise<IPost> {
    return await postRepository.update(tokenPayload.userId, dto);
  }

  public async delete(tokenPayload: ITokenPayload): Promise<void> {
    await postRepository.delete(tokenPayload.userId);
  }
}

export const postService = new PostService();
