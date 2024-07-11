import { env } from "../env";
import { app } from "./app";

const host = "RENDER" in process.env ? `0.0.0.0` : `localhost`;

app.listen({ port: env.PORT, host }).then(() => {
  console.log(`Http server is running on port ${env.PORT}`);
});
