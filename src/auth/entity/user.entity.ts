import * as bcrypt from 'bcryptjs';
import { Entity, Column, PrimaryGeneratedColumn,Unique } from 'typeorm';



@Entity()
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;
  
  @Column()
  salt:string;
  
 async ValidatePassword(password:string):Promise<boolean>{
   const hash = await bcrypt.hash(password,this.salt);
    return this.password===hash;
  }
  
  
}