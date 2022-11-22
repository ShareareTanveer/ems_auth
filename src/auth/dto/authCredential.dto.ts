import {
 
  IsNotEmpty,
  
} from 'class-validator';



export class AuthCredencialDto{
  @IsNotEmpty()
  username:string;
  @IsNotEmpty()
  password:string;
  
}