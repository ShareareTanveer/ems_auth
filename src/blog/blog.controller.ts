import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';

import {
  BlogService
} from './blog.service';

import {
  Blog
} from './entity/blog.entity';


import { CreateBlogDto } from './dto/create-blog.dto'; 


@Controller('blog')
export class BlogController {

  constructor(private blogService: BlogService) {}


  @Get()
  AllBlogs(): Promise < Blog[] > {
    return this.blogService.AllBlogs()
  }

  @Get(":id")
  FindBlogById(@Param("id", ParseIntPipe)id: number): Promise < Blog > {
    return this.blogService.FindBlogById(id)
  }
  
  @Delete(":id")
  DeleteBlog(@Param("id", ParseIntPipe)id: number): Promise < void > {
    return this.blogService.DeleteBlog(id)
  }
  
  @Post()
  @UsePipes(new ValidationPipe())
  CreateBlog(@Body()createBlogDto:CreateBlogDto): Promise < Blog > {
    return this.blogService.CreateBlog(createBlogDto)
  }
  
  @Patch(':id')
  UpdateBlog(@Param("id", ParseIntPipe)id:number,@Body()createBlogDto:CreateBlogDto): Promise < Blog > {
    return this.blogService.UpdateBlog(id,createBlogDto)
  }




}