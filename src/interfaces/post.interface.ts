export interface IPost {
  _id: string;
  userId: string;
  title: string;
  description?: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export type IPostCreate = Pick<IPost, "title" | "description" | "content">;
export type IPostUpdate = Partial<
  Pick<IPost, "title" | "description" | "content">
>;

export type IPostResponse = Pick<
  IPost,
  "_id" | "title" | "createdAt" | "updatedAt"
>;
