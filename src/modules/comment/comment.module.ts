import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { CommentRepository } from '../../repositories/comment.repository';

@Module({
  imports: [],
  controllers: [CommentController],
  providers: [CommentService, CommentRepository],
})
export class CommentModule {}
