import fastify from "fastify";
import { errorHandler } from "./middlewares/errorHandler";
import { PublishUrlRoute } from "./routes/publish-url-route";

export const app = fastify();

app.register(PublishUrlRoute);
app.setErrorHandler(errorHandler);
