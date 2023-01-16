import { Entity, Column,OneToMany,ManyToOne, PrimaryGeneratedColumn,Tree, BeforeInsert, TreeParent, TreeChildren } from 'typeorm';
@Entity('users')
@Tree('materialized-path')
export class UsersEntity {
@PrimaryGeneratedColumn()
id?: number;
@Column()
name: string;
@Column()
role: string;
@Column()
description: string;
@Column()
exprience: number;
@Column({ nullable: true })
managerId?: number;
@TreeParent()
  manager: UsersEntity;
@TreeChildren()
nodes: UsersEntity[];
}

/*export class UsersEntity {
@PrimaryGeneratedColumn()
id?: number;
@Column()
name: string;
@Column()
role: string;

@Column()
description:string

@Column()
experience?: number;

@Column({ nullable: true })
managerId?: number;
@ManyToOne((type) => UsersEntity, (users) => users.employee, {
  onDelete: 'SET NULL',
})
@TreeParent()
manager: UsersEntity;
@OneToMany((type) => UsersEntity, (users) => users.manager)
@TreeChildren()
employee: UsersEntity[];
}
*/