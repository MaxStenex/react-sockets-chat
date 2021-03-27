import { IsString, MaxLength, MinLength, IsEmail } from "class-validator";

export class CreateUserDto {
  @MinLength(1, { message: "firstname length should be between 1 and 30" })
  @MaxLength(30, { message: "firstname length should be between 1 and 30" })
  @IsString()
  readonly firstName: string;

  @MinLength(1, { message: "lastname length should be between 1 and 30" })
  @MaxLength(30, { message: "lastname length should be between 1 and 30" })
  @IsString()
  readonly lastName: string;

  @IsEmail()
  readonly email: string;

  @MinLength(5, { message: "password length should be between 5 and 255" })
  @MaxLength(255, { message: "password length should be between 5 and 255" })
  @IsString()
  readonly password: string;
}
