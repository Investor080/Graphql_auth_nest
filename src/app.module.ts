import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './student/student.module';
import { PartnerModule } from './partner/partner.module';
import { InstructorResolver } from './instructor/instructor.resolver';
import { InstructorModule } from './instructor/instructor.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
  }), AuthModule, UserModule, StudentModule, PartnerModule, InstructorModule,
  ],
  controllers: [],
  providers: [PrismaService, InstructorResolver],
})
export class AppModule{}
