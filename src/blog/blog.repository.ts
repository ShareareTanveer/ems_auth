
import {DataSource,EntityRepository,Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import { Blog } from './entity/blog.entity';



@Injectable()
export class BlogRepository extends Repository<Blog>{
  constructor(private dataSource: DataSource)
    {
        super(Blog, dataSource.createEntityManager());
    }
  
}