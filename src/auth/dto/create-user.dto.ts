
import {
  
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  Matches,
  

} from 'class-validator';



export class CreateUserDto  {
  id:number;
  
  @MinLength(4)
  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  username:string;
  
  @IsNotEmpty()
  @IsEmail()
  email:string;
  
  @IsNotEmpty()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  password:string;
  
}