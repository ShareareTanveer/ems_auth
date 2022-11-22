import { Controller,Get,Post,Put,Patch,Body,Param,UsePipes,ValidationPipe } from '@nestjs/common';
import { AuthService} from './auth.service';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthCredencialDto } from './dto/authCredential.dto';





@Controller('users')
export class AuthController {
  
  
  constructor(private authService:AuthService){}
 
  @Get()
  GetAllUser():Promise<User[]>{
    return this.authService.GetAllUser()
  }
  
  @Get(":id")
  GetUserById(@Param("id")id:string):Promise<User>{
    return this.authService.GetUserById(Number(id))
  }
  
  @Post("signup")
  @UsePipes(new ValidationPipe())
  SignUp(@Body()createUserDto:CreateUserDto):Promise<User>{
    return this.authService.SignUp(createUserDto)
  }
  
  @Post("signin")
  @UsePipes(new ValidationPipe())
  SignIn(@Body()authCredencialDto:AuthCredencialDto){
    return this.authService.SignIn(authCredencialDto)
  }
  
}
