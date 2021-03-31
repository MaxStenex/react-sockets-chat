import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as session from "express-session";
import * as connectRedis from "connect-redis";
import Redis from "ioredis";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ credentials: true, origin: "http://localhost:3000" });

  const RedisStore = connectRedis(session);
  const redis = new Redis();
  app.use(
    session({
      store: new RedisStore({
        client: redis,
      }),
      name: "sid",
      secret: `${process.env.SESSION_SECRET}` || "secret_key",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365,
      },
    })
  );

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000);
}
bootstrap();
