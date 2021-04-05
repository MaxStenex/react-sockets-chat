import { IsEmail } from "class-validator";

export class CreateFriendshipDto {
  @IsEmail()
  readonly email: string;
}
