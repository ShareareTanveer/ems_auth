
import {DataSource,EntityRepository,Repository} from 'typeorm';
import {Injectable,ConflictException,InternalServerErrorException} from '@nestjs/common';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthCredencialDto } from './dto/authCredential.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersRepository extends Repository<User>{
  constructor(private dataSource: DataSource)
    {
        super(User, dataSource.createEntityManager());
    }
    
    
    //Sign Up Repository
    async signUp(createUserDto:CreateUserDto):Promise<User>{
    const user= new User();
    const {username,email,password}= createUserDto;
    
      user.salt = await bcrypt.genSalt();
      user.username=username;
      user.email=email;
      user.password=await bcrypt.hash(password,user.salt);
      
      
      
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
    
    
  //Sign In Repository 
  async SignIn(authCredencialDto:AuthCredencialDto):Promise<string>{
    const {username,password}=authCredencialDto;
    const user=await this.findOneBy({username})
   
    if (user && await user.ValidatePassword(password)){
    
      return user.username
    }
    return null
    
    
    
    
  }
  
    
    
    
  
}