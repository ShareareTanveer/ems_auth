import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService} from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UsersRepository } from './auth.repository';



@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService,UsersRepository]
})
export class AuthModule {}
