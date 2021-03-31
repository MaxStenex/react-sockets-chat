import { Body, Controller, Get, Post, Session, UseGuards } from "@nestjs/common";
import { HttpResponse, SessionType, UserWithoutPasswordType } from "src/types";
import { UserService } from "src/user/user.service";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dto/login-user.dto";
import { RegisterUserDto } from "./dto/register-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService, private userServise: UserService) {}

  @Post("register")
  async register(@Body() registerUserDto: RegisterUserDto): Promise<HttpResponse> {
    return this.authService.register(registerUserDto);
  }

  @Post("login")
  async login(
    @Body() loginUserDto: LoginUserDto,
    @Session() session: SessionType
  ): Promise<UserWithoutPasswordType> {
    return this.authService.login(loginUserDto, session);
  }

  @Get("me")
  @UseGuards(AuthGuard)
  async getAuthenticatedUserInfo(
    @Session() session: SessionType
  ): Promise<UserWithoutPasswordType> {
    return this.userServise.getUserById(session.userId);
  }
}
