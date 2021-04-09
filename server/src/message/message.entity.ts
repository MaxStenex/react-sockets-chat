import { User } from "src/user/user.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @OneToMany(() => User, (user) => user.sendedMessages)
  fromUser: User;

  @ManyToOne(() => User, (user) => user.acceptedMessages)
  toUser: User;

  @CreateDateColumn()
  createdAt: string;
}
