import fastify from "fastify";
import { monitoringRoutes } from "./routes/monitoring";
import cors from '@fastify/cors';


export const app = fastify();

app.register(cors, {
  origin: '*',
});
app.register(monitoringRoutes);