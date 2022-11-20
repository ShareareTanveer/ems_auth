import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './entity/blog.entity';
import { BlogRepository } from './blog.repository';




@Module({
  imports:[TypeOrmModule.forFeature([Blog])],
  controllers: [BlogController],
  providers: [BlogService,BlogRepository]
})
export class BlogModule {}
