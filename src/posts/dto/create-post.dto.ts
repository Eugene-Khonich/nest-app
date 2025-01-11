export class CreatePostDto {
  id: number;
  createdAt: Date;
  title: string;
  content: string;
  authorId: number;
}
