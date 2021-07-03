import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    fullname:string;

    @Column('date') 
    birthday:Date;

    @Column() 
    isactive:boolean;
}