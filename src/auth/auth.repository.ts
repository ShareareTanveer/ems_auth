
import {DataSource,EntityRepository,Repository} from 'typeorm';
import {Injectable,ConflictException,InternalServerErrorException} from '@nestjs/common';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersRepository extends Repository<User>{
  constructor(private dataSource: DataSource)
    {
        super(User, dataSource.createEntityManager());
    }
    
    async signUp(createUserDto:CreateUserDto):Promise<User>{
    const user= new User();
    const {username,email,password}= createUserDto;
      
      user.username=username;
      user.email=email;
      user.password=password;
      
     try{
       await this.save(user);
     }catch(error){
     
       if(error.code==="ER_DUP_ENTRY"){
         throw new ConflictException("Email is Already Taken")
       }else{
         throw new InternalServerErrorException()
       }
     }
     
     return user
      
    }
    
    
    
  
}