import {
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { availability } from '../interface/availabilty.interface';

@Entity()
export class Caregiver {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({ type: 'varchar', length: 120 })
    name: string;

    @Column()
    description: string;

    @Column()
    mobile_number: string;

    @Column()
    hourly_rate: number;

    @Column()
    userId: number;

    @Column()
    experience :number;

    @Column()
    location: string;

    @Column({type: 'jsonb'})
    availability: availability; 

    @CreateDateColumn({ type: 'timestamp' })
    public createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    public updatedAt!: Date;
   
}
