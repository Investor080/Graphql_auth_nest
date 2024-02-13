import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class SignUpInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  username: String;

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
