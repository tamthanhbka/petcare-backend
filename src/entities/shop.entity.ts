import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Service } from './service.entity';
import { Comment } from './comment.entity';

@Entity('shops')
export class Shop extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ type: 'char', length: 10 })
  hotline: string;
  @Column()
  avatar: string;
  @Column()
  slogan: string;
  @OneToMany(() => Service, (service) => service.shopId, { lazy: true })
  services: Service[];
  @OneToMany(() => Comment, (comment) => comment.shopId, { lazy: true })
  comments: Comment[];
}
