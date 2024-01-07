import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentService } from './comment.service';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async index() {
    return await this.commentService.getAll();
  }

  @Post()
  async create(@Body() createCommentDto: CreateCommentDto) {
    return await this.commentService.create(createCommentDto);
  }
}
