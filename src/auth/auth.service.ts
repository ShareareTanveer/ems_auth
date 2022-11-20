import { Injectable,HttpException,HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './auth.repository';




@Injectable()
export class AuthService {
  
  

constructor(
        private usersRepository: UsersRepository,
    )
    {
    }


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
  
  CreateUser(createUserDto:CreateUserDto):Promise<User>{
   
   const user= this.usersRepository.create(createUserDto)
   return this.usersRepository.save(user)
  }
}
