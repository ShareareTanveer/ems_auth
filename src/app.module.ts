import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/entity/user.entity';
import { Blog } from './blog/entity/blog.entity';
import { BlogModule } from './blog/blog.module';
import { dataSourceOptions } from '../db/data-source';




@Module({
  imports: [
    BlogModule,
    AuthModule,
  TypeOrmModule.forRoot(dataSourceOptions),
  
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
