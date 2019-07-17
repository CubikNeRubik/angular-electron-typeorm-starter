import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({name: 'user'})
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    FirstName: string;

    @Column()
    LastName: string;

    @Column()
    Age: number;
}