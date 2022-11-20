
import {
 
  IsNotEmpty,
  
} from 'class-validator';



export class CreateBlogDto  {
  
  id:number;
  
  @IsNotEmpty()
  author:string;
  
  @IsNotEmpty()
  title:string;
  
  @IsNotEmpty()
  description:string;
  
}