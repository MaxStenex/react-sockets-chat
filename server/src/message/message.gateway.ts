import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { MessageService } from "./message.service";

@WebSocketGateway({ namespace: "messages" })
export class MessageGateway {
  constructor(private messageService: MessageService) {}

  @WebSocketServer() wss: Server;

  @SubscribeMessage("messageFromUser")
  async handleMessage(
    client: Socket,
    message: { text: string; senderId: number; roomUserId: number }
  ) {
    const createdMessage = await this.messageService.createMessage({
      text: message.text,
      fromUserId: message.senderId,
      toUserId: message.roomUserId,
    });
    this.wss.to(message.roomUserId.toString()).emit("newMessage", createdMessage);
  }

  @SubscribeMessage("joinRoom")
  userJoinRoom(client: Socket, roomUserId: number) {
    client.join(roomUserId.toString());
  }

  @SubscribeMessage("leaveRoom")
  userLeaveRoom(client: Socket, roomUserId: number) {
    client.leave(roomUserId.toString());
  }
}
