import { Body, Controller, Get, Post, Res, Session, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { HttpResponse, SessionType, UserWithoutPasswordType } from "src/types";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dto/login-user.dto";
import { RegisterUserDto } from "./dto/register-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

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

  @Post("logout")
  async logout(@Res() res: Response, @Session() session: SessionType) {
    return this.authService.logout(session, res);
  }

  @Get("me")
  @UseGuards(AuthGuard)
  async getAuthenticatedUserInfo(
    @Session() session: SessionType
  ): Promise<UserWithoutPasswordType> {
    return this.authService.authMe(session.userId);
  }
}
