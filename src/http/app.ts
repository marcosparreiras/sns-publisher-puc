import fastify from "fastify";
import { errorHandler } from "./middlewares/errorHandler";
import { publishNFERoute } from "./routes/publish-nfe-route";

export const app = fastify();

app.register(publishNFERoute);
app.setErrorHandler(errorHandler);
