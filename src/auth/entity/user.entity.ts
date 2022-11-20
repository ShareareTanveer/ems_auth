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
}