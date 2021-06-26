import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCreateNestedManyWithoutProjectInput } from "../inputs/PostGroupCreateNestedManyWithoutProjectInput";
import { ProjectMemberCreateNestedManyWithoutProjectInput } from "../inputs/ProjectMemberCreateNestedManyWithoutProjectInput";
import { UserCreateNestedManyWithoutFollowedProjectsInput } from "../inputs/UserCreateNestedManyWithoutFollowedProjectsInput";
import { UserCreateNestedManyWithoutLikedProjectsInput } from "../inputs/UserCreateNestedManyWithoutLikedProjectsInput";
import { UserCreateNestedOneWithoutOwnedProjectsInput } from "../inputs/UserCreateNestedOneWithoutOwnedProjectsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateWithoutRolesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  logoUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bannerUrl!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  newJoineesRequireApproval?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOwnedProjectsInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutOwnedProjectsInput;

  @TypeGraphQL.Field(_type => ProjectMemberCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  members?: ProjectMemberCreateNestedManyWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedProjectsInput, {
    nullable: true
  })
  likers?: UserCreateNestedManyWithoutLikedProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowedProjectsInput, {
    nullable: true
  })
  followers?: UserCreateNestedManyWithoutFollowedProjectsInput | undefined;

  @TypeGraphQL.Field(_type => PostGroupCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  postGroups?: PostGroupCreateNestedManyWithoutProjectInput | undefined;
}
