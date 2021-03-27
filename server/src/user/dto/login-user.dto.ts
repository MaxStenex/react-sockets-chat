import { IsString, MaxLength, MinLength, IsEmail } from "class-validator";

export class LoginUserDto {
  @IsEmail()
  readonly email: string;

  @MinLength(5, { message: "password length should be between 5 and 255" })
  @MaxLength(255, { message: "password length should be between 5 and 255" })
  @IsString()
  readonly password: string;
}
