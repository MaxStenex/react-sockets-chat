import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Friendship } from "./friendship.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Friendship])],
  exports: [],
})
export class FriendshipModule {}
