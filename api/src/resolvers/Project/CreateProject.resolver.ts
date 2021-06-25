import {
    Arg,
    Ctx,
    Field,
    InputType,
    Mutation,
    Resolver,
    UseMiddleware,
} from "type-graphql";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { User } from "@prisma/client";
import { isAuthenticated } from "src/middleware/isAuthenticated.middleware";
import { Project } from "~/typegql-types/Project";

@InputType()
export class CreateProjectInput {
    @Field()
    title: string;

    @Field()
    description?: string;

    @Field({ nullable: true })
    logoUrl?: string;

    @Field({ nullable: true })
    bannerUrl?: string;
}

@Resolver()
export default class CreateProjectResolver {
    @Mutation(() => Project)
    @UseMiddleware(isAuthenticated)
    async createProject(
        @Arg("input") input: CreateProjectInput,
        @Ctx() { req, prisma }: ContextType
    ): Promise<Project | null> {
        // retrieve the currently logged in user
        const user: User = (req as any).user;
        console.log(user);

        return executeOrFail(async () => {
            const project = prisma.project.create({
                data: {
                    title: input.title,
                    description: input.description || "",
                    bannerUrl: input.bannerUrl || "",
                    logoUrl: input.logoUrl || "",
                    owner: {
                        connect: { id: user.id },
                    },
                    members: {
                        create: [
                            {
                                user: { connect: { id: user.id } },
                                awaitingApproval: false,
                            },
                        ],
                    },
                },
            });
            return project;
        });
    }
}
