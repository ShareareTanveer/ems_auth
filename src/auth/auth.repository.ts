
import {DataSource,EntityRepository,Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import { User } from './entity/user.entity';



@Injectable()
export class UsersRepository extends Repository<User>{
  constructor(private dataSource: DataSource)
    {
        super(User, dataSource.createEntityManager());
    }
  
}