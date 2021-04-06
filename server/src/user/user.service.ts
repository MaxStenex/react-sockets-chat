import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Friendship, FriendshipStatus } from "src/friendship/friendship.entity";
import { UserWithoutPasswordType } from "src/types";
import { Repository } from "typeorm";
import { CreateFriendshipDto } from "./dto/createFriendshipDto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Friendship) private friendshipRepository: Repository<Friendship>
  ) {}

  async getUserFriendshipsById(userId: number) {
    const friendships: Friendship[] = [];

    const ifUserOne = await this.friendshipRepository.find({
      where: { userOne: { id: userId } },
      relations: ["userTwo"],
    });
    const ifUserTwo = await this.friendshipRepository.find({
      where: { userTwo: { id: userId } },
      relations: ["userOne"],
    });
    friendships.push(...ifUserOne);
    friendships.push(...ifUserTwo);

    return friendships.map((f) => {
      const user = f.userOne || f.userTwo;
      return {
        id: f.id,
        status: f.status,
        user: { id: user.id, firstName: user.firstName, lastName: user.lastName },
      };
    });
  }

  async createFriendship(
    userId: number,
    { email }: CreateFriendshipDto
  ): Promise<UserWithoutPasswordType> {
    const users = await Promise.all([
      this.userRepository.findOne({ where: { id: userId } }),
      this.userRepository.findOne({ where: { email } }),
    ]);

    const isFriendshipAlreadyRequested = await this.friendshipRepository.findOne({
      where: { userOne: users[0], userTwo: users[1] },
    });
    if (isFriendshipAlreadyRequested) {
      throw new HttpException("Friendship already requested", HttpStatus.BAD_REQUEST);
    }

    if (users.some((i) => !i)) {
      throw new HttpException("This email doesnt exist", HttpStatus.BAD_REQUEST);
    }
    if (users.filter((u) => u.id !== userId).length === 0) {
      throw new HttpException("Invalid email", HttpStatus.BAD_REQUEST);
    }

    const newFriendship = this.friendshipRepository.create({
      userOne: users[0],
      userTwo: users[1],
      status: FriendshipStatus.REQUESTED,
    });

    this.friendshipRepository.save(newFriendship);
    const newFriend = users[1];

    return {
      id: newFriend.id,
      firstName: newFriend.firstName,
      lastName: newFriend.lastName,
      email: newFriend.email,
    };
  }
}
