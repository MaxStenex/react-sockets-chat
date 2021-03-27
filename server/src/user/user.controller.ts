import { Body, Controller, Post } from "@nestjs/common";
import { HttpResponse, UserWithoutPasswordType } from "src/types";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("register")
  async register(@Body() createUserDto: CreateUserDto): Promise<HttpResponse> {
    return this.userService.create(createUserDto);
  }

  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto): Promise<UserWithoutPasswordType> {
    return this.userService.login(loginUserDto);
  }
}
