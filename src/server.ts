import { app } from "./app";

app.listen({ port: 3333 }).then(() => {
  console.log(`Http server is running on port ${3333}`);
});
