import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Service } from './service.entity';

@Entity('categories')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @OneToMany(() => Service, (service) => service.categoryId, { lazy: true })
  services: Service[];
}
