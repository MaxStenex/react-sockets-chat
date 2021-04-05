import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { Friendship } from "src/friendship/friendship.entity";
import { UserController } from "./user.controller";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Module({
  imports: [TypeOrmModule.forFeature([User, Friendship]), AuthModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
