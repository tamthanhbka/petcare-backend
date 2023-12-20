import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Role {
  ADMIN,
  USER,
  STAFF,
}

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    fullName: string;

    @Column()
    phone: string;

    @Column({nullable: true})
    dateOfBirth: Date;

    @Column({nullable: true})
    avatar: string;

    @Column({
        type: "enum",
        enum: Role,
        default: Role.USER
    })
    role: Role;

    @Column({type: "boolean", default: true})
    isActive: boolean;
}
