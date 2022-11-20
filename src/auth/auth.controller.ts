import { Controller,Get,Post,Put,Patch,Body,Param,UsePipes,ValidationPipe } from '@nestjs/common';
import { AuthService} from './auth.service';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';




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
  @Post()
  @UsePipes(new ValidationPipe())
  CreateUser(@Body()createUserDto:CreateUserDto):Promise<User>{
    return this.authService.CreateUser(createUserDto)
  }
  
}
