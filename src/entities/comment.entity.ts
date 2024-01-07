import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Shop } from './shop.entity';

@Entity('comments')
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  content: string;
  @Column()
  value: 1 | 2 | 3 | 4 | 5;
  @Column({ name: 'user_id' })
  userId: number;
  @Column({ name: 'shop_id' })
  shopId: number;
  @ManyToOne(() => User, (user) => user.id, { lazy: true })
  @JoinColumn({ name: 'user_id' })
  user: User;
  @ManyToOne(() => Shop, (shop) => shop.id, { lazy: true })
  @JoinColumn({ name: 'shop_id' })
  shop: User;
}
