import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository  } from '@nestjs/typeorm';
import { Injectable,UnauthorizedException } from '@nestjs/common';
//import { jwtConstants } from './constants';
import { JwtPayLoad } from './jwtPayLoad.interface'; 
import { UsersRepository } from './auth.repository'; 
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
 
    ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
    });
  }

  async validate(payload: JwtPayLoad):Promise<User> {

    const user = await this.usersRepository.findOneBy({username:payload.username});
 
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}