export interface IPost {
  _id: string;
  userId: string;
  title: string;
  author: string;
  description?: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export type IPostCreate = Pick<
  IPost,
  "title" | "author" | "description" | "content"
>;
export type IPostUpdate = Partial<
  Pick<IPost, "title" | "author" | "description" | "content">
>;
