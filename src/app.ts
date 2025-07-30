import fastify from "fastify";
import { monitoringRoutes } from "./routes/monitoring";

export const app = fastify();

app.register(monitoringRoutes)
