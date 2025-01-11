import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
// import { CreatePostDto, UpdatePostDto, ListAllEntities } from './dto';
import { PostService } from './posts.service';

@Controller('psots')
export class PostsController {
  constructor(private postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return 'New post';
  }

  @Get()
  getAllPosts(@Query() query: ListAllEntities) {
    return `Total posts ${query.limit}`;
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return `Post with ${id} identify`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() uodatePostDto: UpdatePostDto) {
    return `Updated post with ${id} identify`;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }
}
