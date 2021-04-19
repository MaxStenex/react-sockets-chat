import { Controller, Get, Param, Session, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { SessionType } from "src/types";
import { MessageService } from "./message.service";

@Controller("message")
export class MessageController {
  constructor(private messageService: MessageService) {}

  @UseGuards(AuthGuard)
  @Get("all/:userId")
  getAllMessages(@Param() params, @Session() session: SessionType) {
    return this.messageService.getAll(parseInt(params.userId), session.userId);
  }
}
