import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MessageType } from "src/types";
import { User } from "src/user/user.entity";
import { Repository } from "typeorm";
import { CreateMessageDto } from "./dto/createMessageDto";
import { Message } from "./message.entity";

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message) private messageRepository: Repository<Message>,
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async createMessage({
    text,
    fromUserId,
    toUserId,
  }: CreateMessageDto): Promise<MessageType> {
    try {
      const users = await Promise.all([
        this.userRepository.findOne({ where: { id: fromUserId } }),
        this.userRepository.findOne({ where: { id: toUserId } }),
      ]);
      const messageSender = users[0];
      const messageAccepter = users[1];

      const message = this.messageRepository.create({
        text,
        fromUser: messageSender,
        toUser: messageAccepter,
      });
      const savedMessage = await this.messageRepository.save(message);

      return {
        id: savedMessage.id,
        text: savedMessage.text,
        createdAt: savedMessage.createdAt,
        accepterId: toUserId,
        senderId: fromUserId,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(userOneId: number, userTwoId: number): Promise<Array<MessageType>> {
    try {
      const messagesArrs = await Promise.all([
        this.messageRepository.find({
          where: { fromUser: { id: userOneId }, toUser: { id: userTwoId } },
          relations: ["fromUser", "toUser"],
        }),
        this.messageRepository.find({
          where: { fromUser: { id: userTwoId }, toUser: { id: userOneId } },
          relations: ["fromUser", "toUser"],
        }),
      ]);

      const messages = [...messagesArrs[0], ...messagesArrs[1]];
      return messages.map((m) => ({
        id: m.id,
        text: m.text,
        createdAt: m.createdAt,
        accepterId: m.toUser.id,
        senderId: m.fromUser.id,
      }));
    } catch (error) {
      console.log(error);
    }
  }
}
