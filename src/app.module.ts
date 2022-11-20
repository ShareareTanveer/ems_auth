import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/entity/user.entity';
import { Blog } from './blog/entity/blog.entity';
import { BlogModule } from './blog/blog.module';




@Module({
  imports: [AuthModule,
  TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'tanveer',
      database: 'ems',
      entities: [User,Blog],
      synchronize: true,
    }),
  BlogModule,
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
