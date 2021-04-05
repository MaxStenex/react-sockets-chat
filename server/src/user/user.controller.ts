import { Post } from "@nestjs/common";
import { Body, Controller, Get, UseGuards, Session } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { SessionType } from "src/types";
import { CreateFriendshipDto } from "./dto/createFriendshipDto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get("friendships")
  async getUserFriendships(@Session() session: SessionType) {
    return this.userService.getUserFriendshipsById(session.userId);
  }

  @UseGuards(AuthGuard)
  @Post("create-friendship")
  async createUserFriendship(
    @Body() { email }: CreateFriendshipDto,
    @Session() session: SessionType
  ) {
    return this.userService.createFriendship(session.userId, { email });
  }
}
