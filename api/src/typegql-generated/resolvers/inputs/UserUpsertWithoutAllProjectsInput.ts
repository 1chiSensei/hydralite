import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutAllProjectsInput } from "../inputs/UserCreateWithoutAllProjectsInput";
import { UserUpdateWithoutAllProjectsInput } from "../inputs/UserUpdateWithoutAllProjectsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutAllProjectsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutAllProjectsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutAllProjectsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutAllProjectsInput, {
    nullable: false
  })
  create!: UserCreateWithoutAllProjectsInput;
}
