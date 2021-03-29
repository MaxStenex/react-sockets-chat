import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";
import * as argon from "argon2";
import { HttpResponse, UserWithoutPasswordType } from "src/types";
import { LoginUserDto } from "./dto/login-user.dto";

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async create({
    firstName,
    lastName,
    email,
    password,
  }: CreateUserDto): Promise<HttpResponse> {
    try {
      const hashedPassword = await argon.hash(password);
      const user = this.userRepository.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      await this.userRepository.save(user);

      return { message: "Successfully registered", statusCode: HttpStatus.CREATED };
    } catch (error) {
      // email already used
      if (error.code === "23505") {
        throw new HttpException("Email already exist", HttpStatus.BAD_REQUEST);
      }
      throw new HttpException("Something goes wrong", HttpStatus.BAD_REQUEST);
    }
  }

  async login({ email, password }: LoginUserDto): Promise<UserWithoutPasswordType> {
    const invalidEmailOrPasswordException = new HttpException(
      "Invalid email or password",
      HttpStatus.BAD_REQUEST
    );

    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw invalidEmailOrPasswordException;
    }

    const isValidPassword = await argon.verify(user.password, password);
    if (!isValidPassword) {
      throw invalidEmailOrPasswordException;
    }

    return { email, firstName: user.firstName, lastName: user.lastName, id: user.id };
  }
}
