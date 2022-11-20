import { Entity, Column, PrimaryGeneratedColumn,Unique } from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @Column()
  title: string;

  @Column()
  description: string;
}