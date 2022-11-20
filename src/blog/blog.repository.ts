import { Repository,EntityRepository } from 'typeorm';
import { Blog } from './entity/blog.entity';

@EntityRepository(Blog)
export class BlogRepository extends Repository<Blog>{}