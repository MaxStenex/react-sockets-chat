import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Message } from "./message.entity";
import { MessageGateway } from "./message.gateway";

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [MessageGateway],
})
export class MessageModule {}
