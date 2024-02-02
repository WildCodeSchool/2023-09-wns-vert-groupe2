import { ObjectType, Query, Resolver } from 'type-graphql';

@ObjectType()
@Resolver()
export class UserResolver {
  @Query(() => String)
  async hello() {
    return 'Hello World';
  }
}
