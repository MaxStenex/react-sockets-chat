import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/user.entity";
import { Message } from "./message.entity";
import { MessageGateway } from "./message.gateway";
import { MessageService } from "./message.service";
import { MessageController } from './message.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Message, User])],
  providers: [MessageGateway, MessageService],
  controllers: [MessageController],
})
export class MessageModule {}
