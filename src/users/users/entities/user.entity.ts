import {
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { UserType } from './user-type.entity';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({ type: 'varchar', length: 120 })
    username: string;

    @Column({ type: 'varchar', length: 120 })
    email: string;

    @Column()
    mobile_number: string;

    @OneToOne(() => UserType)
    user_type: UserType;

    @Column()
    password: string;

    @Column()
    token: string;

    @CreateDateColumn({ type: 'timestamp' })
    public createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    public updatedAt!: Date;
}
