import { z } from "zod";
import type { FastifyInstance } from "fastify";
import type { MessagePublisher } from "../../appilcation/bondaries/message-publisher";
import { SNSMessagePublisher } from "../../adapters/sns-message-publisher";
import { env } from "../../env";
import { PublishNFEUseCase } from "../../appilcation/use-cases/publish-nfe-use-case";

export async function publishNFERoute(app: FastifyInstance) {
  app.post("/nfe", async (request, reply) => {
    const requestBodySchema = z.object({
      url: z.string().url(),
    });

    const { url } = requestBodySchema.parse(request.body);
    const messagePublisher: MessagePublisher = new SNSMessagePublisher();
    const publishNFEUseCase = new PublishNFEUseCase(messagePublisher);

    await publishNFEUseCase.execute({
      channel: env.AWS_PUBLISH_URL_TOPIC_ARN,
      url,
    });

    return reply.status(201).send(null);
  });
}
