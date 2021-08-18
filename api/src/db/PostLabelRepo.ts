import { PrismaClient, PostLabel } from "@prisma/client";
import { ApolloError } from "apollo-server-express";

export class PostLabelRepo extends PrismaClient {
  async findPostLabelById(
    id: string,
    validate = true
  ): Promise<PostLabel | null> {
    const postLabel = await this.postLabel.findUnique({ where: { id } });
    if (validate && !postLabel)
      throw new ApolloError("This label doesn't exist.", "invalid_id");

    return postLabel;
  }
}
