import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Shop } from './shop.entity';
import { Category } from './category.entity';

@Entity('services')
export class Service extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  image: string;
  @Column()
  description: string;
  @Column({ name: 'shop_id' })
  shopId: number;
  @Column({ name: 'category_id' })
  categoryId: number;
  @ManyToOne(() => Shop, (shop) => shop.id, { lazy: true })
  @JoinColumn({ name: 'shop_id' })
  shop: Shop;
  @ManyToOne(() => Category, (category) => category.id, { lazy: true })
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
