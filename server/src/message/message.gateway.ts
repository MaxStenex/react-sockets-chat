import {
  SubscribeMessage,
  WebSocketGateway,
  MessageBody,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway()
export class MessageGateway {
  @WebSocketServer() wss: Server;

  @SubscribeMessage("messageToServer")
  handleMessage(@MessageBody() data: string) {
    console.log(data);
    this.wss.emit("messageToClient", "Hello!");
  }
}
