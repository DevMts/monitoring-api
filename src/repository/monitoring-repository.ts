import { Monitoring, Prisma } from "@prisma/client";

export interface MonitoringRepository {
  getMonitoringData(): Promise<Monitoring[]>;
  saveMonitoringData(data: Omit<Monitoring, "id" | "createdAt">): Promise<Monitoring>;
  deleteMonitoringData(id: string): Promise<void>;
  findMonitoringById(id: string): Promise<Monitoring | null>;
}

export { type Monitoring };