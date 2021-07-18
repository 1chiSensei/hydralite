import { User } from '@prisma/client';
import { Arg, Ctx, Mutation } from 'type-graphql';
import { IsAuthenticated } from '~/middleware/isAuthenticated.middleware';
import ContextType from '~/types/Context.type';
import executeOrFail from '~/util/executeOrFail';
import { LikeUnlikeProjectArgs } from './args/LikeUnlikeProjectArgs';

export default class LikeUnlikeProjectResolver {
  @IsAuthenticated()
  @Mutation(() => String)
  async likeProject(
    @Arg('args') { projectId }: LikeUnlikeProjectArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<string> {
    return executeOrFail(async () => {
      // retrieve the currently logged in user
      const user: User = (req as any).user;

      await prisma.project.update({
        where: {
          id: projectId,
        },
        data: {
          likers: {
            connect: {
              id: user.id,
            },
          },
        },
      });

      return 'Liked project.';
    });
  }

  @IsAuthenticated()
  @Mutation(() => String)
  async unlikeProject(
    @Arg('args') { projectId }: LikeUnlikeProjectArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<string> {
    return executeOrFail(async () => {
      // retrieve the currently logged in user
      const user: User = (req as any).user;

      await prisma.project.update({
        where: {
          id: projectId,
        },
        data: {
          likers: {
            disconnect: {
              id: user.id,
            },
          },
        },
      });

      return 'Unliked project.';
    });
  }
}
