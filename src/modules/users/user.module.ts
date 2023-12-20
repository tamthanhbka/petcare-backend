import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { UserRepository } from '../../repositories/user.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
