import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserWithoutPasswordType } from "src/types";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
  async getUserById(userId: number): Promise<UserWithoutPasswordType> {
    try {
      const { id, firstName, lastName, email } = await this.userRepository.findOne({
        where: { id: userId },
      });
      return { id, firstName, lastName, email };
    } catch (error) {
      throw new HttpException("Not authenticated", HttpStatus.UNAUTHORIZED);
    }
  }
}
