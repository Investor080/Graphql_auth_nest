import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

// import { CorsModule } from '@nestjs/common';
import * as csurf from 'csurf';
import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(express.urlencoded({ extended: false }));
  app.use(csurf({ cookie: true }));
  // app.use(helmet());

  // const graphqlOptions = new GraphQLModule({
  //   autoSchemaFile: 'schema.gql',
  //   context: ({ req }) => ({ req }),
  // });
  // graphqlOptions.applyMiddleware({ app });

app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
