import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService} from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UsersRepository } from './auth.repository';
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
    PassportModule.register({defaultStrategy:"jwt"}),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60000s' }})
    ],
  controllers: [AuthController],
  providers: [AuthService,UsersRepository,JwtStrategy],
  exports: [JwtStrategy,PassportModule]
})
export class AuthModule {}
