import type { FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";
import { AppException } from "../../exceptions/app-exceptions";

export async function errorHandler(
  error: Error,
  _request: FastifyRequest,
  reply: FastifyReply
) {
  if (error instanceof ZodError) {
    return reply.status(400).send({ message: error.format() });
  }
  if (error instanceof AppException) {
    return reply.status(error.getErrorCode()).send({ message: error.message });
  }
  console.log(error);

  return reply.status(500).send({ message: "Internal server error" });
}
