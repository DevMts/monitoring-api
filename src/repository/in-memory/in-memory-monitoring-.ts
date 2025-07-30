import { randomUUID } from "node:crypto";
import { MonitoringRepository, Monitoring } from "../monitoring-repository";
import { Prisma } from "@prisma/client";
import { log } from "node:console";


export class MonitoringRepositoryInMemory implements MonitoringRepository {
  private data: Monitoring[] = [];


  async getMonitoringData() {
    return this.data;
  }

  async saveMonitoringData({ assunt, hour, name, students }: Omit<Monitoring, "id" | "createdAt">) {

    const newData: Monitoring = {
      id: randomUUID(),
      assunt,
      hour,
      name,
      students,
      createdAt: new Date(),
    };
    this.data.push(newData);
    log(this.data);
    return newData;
  }

  async deleteMonitoringData(id: string) {
    this.data = this.data.filter((data) => data.id !== id);
  }

}