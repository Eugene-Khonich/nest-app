import { Injectable } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  private readonly posts: PostDto[] = [];

  create(post: CreatePostDto) {
    this.posts.push(post);
  }
  getAllPosts(): PostDto[] {
    return this.posts;
  }
}
