export interface getPost {
  data: Post;
}
export interface getPostResults {
  data: Post[];
}
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
