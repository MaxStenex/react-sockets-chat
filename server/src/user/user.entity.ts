import { Friendship } from "src/friendship/friendship.entity";
import { Message } from "src/message/message.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Friendship, (friendship) => friendship.userOne || friendship.userTwo)
  friendships: Friendship[];

  @OneToMany(() => Message, (message) => message.fromUser)
  sendedMessages: Message[];

  @OneToMany(() => Message, (message) => message.toUser)
  acceptedMessages: Message[];
}
