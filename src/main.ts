import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { CorsModule } from '@nestjs/common';
import * as csurf from 'csurf';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors();
  app.use(csurf());
app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
