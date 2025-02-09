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
