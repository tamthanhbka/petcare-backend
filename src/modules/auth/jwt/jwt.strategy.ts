import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthPayload } from '../interfaces/auth-payload.interface';
import { User } from '../../../entities/user.entity';
import { UserRepository } from '../../../repositories/user.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersRepository: UserRepository) {
    super({
      secretOrKey: 'sample',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(authPayload: AuthPayload): Promise<User> {
    const { id } = authPayload;
    const user: User = await this.usersRepository.findOneBy({ id });

    if (!user) {
      throw new UnauthorizedException('fails');
    }

    return user;
  }
}
