import { Injectable,HttpException,HttpStatus,UnauthorizedException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './auth.repository';
import { AuthCredencialDto } from './dto/authCredential.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayLoad } from './jwtPayLoad.interface';


@Injectable()
export class AuthService {
  
  

constructor(
        private usersRepository: UsersRepository,
        private jwtService: JwtService,
    ){}


  async GetAllUser():Promise<User[]>{
    return this.usersRepository.find();
  }
  
 async GetUserById(id:number):Promise<User>{
    const found = await this.usersRepository.findOneBy({id});
    if (!found){
   throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
    return found
  }
  
  async SignUp(createUserDto:CreateUserDto):Promise<User>{
   return this.usersRepository.signUp(createUserDto)
   
  }
  
  async SignIn(authCredencialDto :AuthCredencialDto):Promise<{access_token:string}>{
  const username=await this.usersRepository.SignIn(authCredencialDto)
  if (!username){
    throw new UnauthorizedException("Credentials Invalid")
  }
  const payload:JwtPayLoad={username};
  const access_token=await this.jwtService.sign(payload);
  return {access_token}
        
   
  }
}
