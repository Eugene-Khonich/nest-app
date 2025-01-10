import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Post()
  create(): string {
    return 'New post';
  }
  @Get()
  @Header('Answer', 'Hello World')
  @HttpCode(HttpStatus.OK)
  //   @HttpCode(302)
  getAllPosts(): string {
    return 'All posts';
  }
}
