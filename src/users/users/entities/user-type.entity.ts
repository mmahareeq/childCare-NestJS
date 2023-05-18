import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TYPE {
    PARENT = "parent",
    CAREGIVER = "CAREGIVER",
}

@Entity()
export class UserType{
  @PrimaryGeneratedColumn()
  public id!: number; 

  @Column({type: "enum", enum: TYPE , default: TYPE.CAREGIVER})
  user_type: TYPE;

}