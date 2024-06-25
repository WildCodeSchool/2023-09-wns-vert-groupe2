import { User } from "../entities/user";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class AuthenticatedUser {
  @Field(() => User)
  user: User;

  @Field()
  token: String;
}

@ObjectType()
export class UserContext {
  @Field(() => User)
  user: {
    id: string;
    email: string;
    isAdmin: boolean;
    iat: number;
  };
}

@ObjectType()
export class UserContextV2 {
  id: string;
  email: string;
  isAdmin: boolean;
  iat: number;
}
