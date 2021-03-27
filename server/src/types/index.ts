import { HttpStatus } from "@nestjs/common";

export type HttpResponse = {
  message: string;
  statusCode: HttpStatus;
};

export type UserWithoutPasswordType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};
