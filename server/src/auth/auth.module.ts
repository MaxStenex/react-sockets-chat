import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/user.entity";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserService } from "src/user/user.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [AuthService, AuthGuard, UserService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
