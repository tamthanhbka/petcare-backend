import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentRepository } from '../../repositories/comment.repository';

@Injectable()
export class CommentService {
  private readonly userId: number = 1;

  constructor(private readonly repository: CommentRepository) {}

  async create(createCommentDto: CreateCommentDto) {
    return await this.repository.save({
      ...createCommentDto,
      userId: this.userId,
    });
  }

  async getAll() {
    return await this.repository.find();
  }
}
