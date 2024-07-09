import z from "zod";

const envSchema = z.object({
  PORT: z.coerce.number(),
  AWS_ACCESS_KEY_ID: z.string(),
  AWS_SECRET_ACCESS_KEY: z.string(),
  AWS_REGION: z.string(),
  AWS_PUBLISH_URL_TOPIC_ARN: z.string(),
});

export const env = envSchema.parse(process.env);
