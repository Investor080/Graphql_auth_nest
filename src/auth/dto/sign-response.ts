import { Field, ObjectType, } from "@nestjs/graphql"; 
import { User } from "./../../user/user.entity"; 
import { IsNotEmpty, IsString } from "class-validator";

@ObjectType()
export class SignResponse {
    @IsNotEmpty()
    @IsString()
    @Field()
    accessToken: String;

    @Field()
    refreshToken: String;
    
    @Field(() => User)
    user: User;
}
