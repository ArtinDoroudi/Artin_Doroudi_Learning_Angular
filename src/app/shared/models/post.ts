export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  isPinned?: boolean; // Optional
}
