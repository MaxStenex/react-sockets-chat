import { User } from "src/user/user.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";

export enum FriendshipStatus {
  ACCEPTED = "accepted",
  REQUESTED = "requested",
}

@Entity()
export class Friendship {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: FriendshipStatus,
    default: FriendshipStatus.REQUESTED,
  })
  status: FriendshipStatus;

  @ManyToOne(() => User, (user) => user.friendships)
  userOne: User;

  @ManyToOne(() => User, (user) => user.friendships)
  userTwo: User;
}
