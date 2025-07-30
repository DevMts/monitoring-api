import { log } from "node:console";
import { app } from "./app";
import { env } from "./env";


export default async function handler(request: any, response: any) {
  await app.ready();
  app.server.emit('request', request, response);
  log("Server is running on port" + env.PORT);
}