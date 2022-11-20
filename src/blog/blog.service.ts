import {
  Injectable,
  HttpException,
  HttpStatus,ConflictException,InternalServerErrorException
} from '@nestjs/common';
import {
  Blog
} from './entity/blog.entity';
import {
  CreateBlogDto
} from './dto/create-blog.dto';
import {
  BlogRepository
} from './blog.repository';




@Injectable()
export class BlogService {

  constructor(
    private blogRepository: BlogRepository,
  ) {}

  // Find All Blogs
  async AllBlogs(): Promise < Blog[] > {
    const blogs = await this.blogRepository.find()
    return blogs
  }

  // Find Single Blog By Id
  async FindBlogById(id: number): Promise < Blog > {
    const found = await this.blogRepository.findOneBy({
      id
    });

    if (!found) {
      throw new HttpException("Could Not Found Any Blog With Given Id", HttpStatus.NOT_FOUND)
    }
    return found
  }

  //Create Blog
  async CreateBlog(createBlogDto: CreateBlogDto): Promise < Blog > {
    const blog = this.blogRepository.create(createBlogDto)
    await this.blogRepository.save(blog)
    return blog
  }
  
  
  // Delete Blog
  async DeleteBlog(id:number): Promise < void > {
    const blog = await this.FindBlogById(id);
    this.blogRepository.delete(blog)
  }

  //Update Blog :-> Patch Request
  async UpdateBlog(id: number, createBlogDto: CreateBlogDto): Promise < Blog > {
    const blog = await this.FindBlogById(id);
    const {
      title,
      author,
      description
    } = createBlogDto;

     blog.title = title;
    blog.description = description;
    blog.author = author;
    return this.blogRepository.save(blog)

  }







}