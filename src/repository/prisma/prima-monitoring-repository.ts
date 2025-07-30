import { Monitoring, MonitoringRepository } from "../monitoring-repository";
import { prisma } from "../../lib/prisma";

export class PrismaMonitoringRepository implements MonitoringRepository {
  async deleteMonitoringData(id: string) {
    await prisma.monitoring.delete({
      where: { id },
    });
  }
  async getMonitoringData() {
    return prisma.monitoring.findMany();
  }
  async saveMonitoringData(data: Omit<Monitoring, "id" | "createdAt">) {
    return await prisma.monitoring.create({
      data
    });
  }
}