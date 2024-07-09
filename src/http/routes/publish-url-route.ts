import { z } from "zod";
import type { FastifyInstance } from "fastify";
import type { MessagePublisher } from "../../message/message-publisher";
import { SNSMessagePublisher } from "../../message/sns-message-publisher";
import { env } from "../../env";

export async function PublishUrlRoute(app: FastifyInstance) {
  app.post("/publish-url", async (request, reply) => {
    const requestBodySchema = z.object({
      url: z.string().url(),
    });

    const { url } = requestBodySchema.parse(request.body);

    const messagePublisher: MessagePublisher = new SNSMessagePublisher();
    await messagePublisher.send(
      env.AWS_PUBLISH_URL_TOPIC_ARN,
      JSON.stringify({ url })
    );

    return reply.status(201).send(null);
  });
}
