import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  u_id: number;

  @Column()
  name: string;

  @Column()
  pass: string;

  @Column()
  desc: string;
}
