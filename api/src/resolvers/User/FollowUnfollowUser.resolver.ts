import { User } from "@prisma/client";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { FollowUnfollowUserArgs } from "./args/FollowUnfollowUserArgs";
@Resolver()
export default class FollowUnfollowUserResolver {
  @Mutation(() => String)
  @UseMiddleware(isAuthenticated)
  async followUser(
    @Arg("args") args: FollowUnfollowUserArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<String> {
    return executeOrFail(async () => {
      const user: User = (req as any).user;

      if (args.userId === user.id) throw new Error("You cant follow yourself.");

      // add user a to user b's followers
      await prisma.user.update({
        where: {
          id: args.userId,
        },
        data: {
          followers: {
            connect: {
              id: user.id,
            },
          },
        },
      });

      return "Followed user";
    });
  }

  @Mutation(() => String)
  @UseMiddleware(isAuthenticated)
  async unfollowUser(
    @Arg("args") args: FollowUnfollowUserArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<String> {
    return executeOrFail(async () => {
      const user: User = (req as any).user;

      // remove user a from user b's followers
      await prisma.user.update({
        where: {
          id: args.userId,
        },
        data: {
          followers: {
            disconnect: {
              id: user.id,
            },
          },
        },
      });

      return "Unfollowed user";
    });
  }
}
