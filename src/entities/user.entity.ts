import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Group } from './group.entity';
import { Photo } from './photo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  prefix: string

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Photo, photo => photo.user)
  photos: Photo[];

  @ManyToMany(() => Group, group => group.users)
  @JoinTable()
  groups: Group[];
}