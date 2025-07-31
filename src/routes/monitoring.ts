import { FastifyInstance } from "fastify";
import { createMonitoringController } from "../http/controllers/create-monitoring-controller";
import { getAllMonitoringController } from "../http/controllers/get-all-monitoring-controller";
import { deleteMonitoringController } from "../http/controllers/delete-monitoring-controller";
import { getMonitoringByIdController } from "../http/controllers/get-monitoring-by-id";

export async function monitoringRoutes(app: FastifyInstance) {
  app.post("/monitoring", createMonitoringController);
  app.get("/monitoring", getAllMonitoringController);
  app.delete("/monitoring/:id", deleteMonitoringController);
  app.get("/monitoring/:id", getMonitoringByIdController);
}