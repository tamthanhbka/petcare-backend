import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Service } from './service.entity';

export enum BookingStatus {
  PENDING,
  ACCEPTED,
  REJECTED,
}

@Entity('bookings')
export class Booking extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'user_id' })
  userId: number;
  @Column({ name: 'service_id' })
  serviceId: number;
  @Column()
  time: Date;
  @Column({ type: 'enum', enum: BookingStatus, default: BookingStatus.PENDING })
  status: BookingStatus;
  @CreateDateColumn()
  createdAt: Date;
  @ManyToOne(() => User, (user) => user.id, { lazy: true })
  @JoinColumn({ name: 'user_id' })
  user: User;
  @ManyToOne(() => Service, (service) => service.id, { lazy: true })
  @JoinColumn({ name: 'service_id' })
  service: Service;
}
