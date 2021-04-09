import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/user.entity";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { FriendshipModule } from "./friendship/friendship.module";
import { Friendship } from "./friendship/friendship.entity";
import { MessageModule } from "./message/message.module";
import { Message } from "./message/message.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "react_sockets",
      entities: [User, Friendship, Message],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    FriendshipModule,
    MessageModule,
  ],
  controllers: [],
})
export class AppModule {}
