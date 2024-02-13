import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class SignInInput {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Field()
  email: String

  @IsNotEmpty()
  @IsString()
  @Field()
  password: String
}
