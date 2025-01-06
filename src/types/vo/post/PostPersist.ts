export type PostPersist = {
  id: number;
  title: string;
  tagList: string[];
  author: number;
  commentCount: number;
  likes: number;
  dislikes: number;
  createAt: Date;
  updateAt: Date;
};
