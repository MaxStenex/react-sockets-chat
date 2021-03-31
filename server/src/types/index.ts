import { HttpStatus } from "@nestjs/common";
import { Session } from "express-session";

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

export type SessionType = Session & {
  userId?: number;
};
