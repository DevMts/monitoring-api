import { Monitoring, Prisma } from "@prisma/client";

export interface MonitoringRepository {
  getMonitoringData(): Promise<Monitoring[]>;
  saveMonitoringData(data: Omit<Monitoring, "id" | "createdAt">): Promise<Monitoring>;
  deleteMonitoringData(id: string): Promise<void>;
}

export { type Monitoring };