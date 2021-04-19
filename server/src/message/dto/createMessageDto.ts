import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateMessageDto {
  @IsString()
  @MinLength(1, { message: "Min length is 1" })
  @MaxLength(255, { message: "Max length is 255" })
  text: string;

  fromUserId: number;

  toUserId: number;
}
