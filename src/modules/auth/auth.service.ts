import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/user.repository';

@Injectable()
export class AuthService {
  constructor(private readonly repository: UserRepository) {}
}
