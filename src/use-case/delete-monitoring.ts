import { MonitoringRepository } from "../repository/monitoring-repository";

export class DeleteMonitoringUseCase {
  constructor(private monitoringRepository: MonitoringRepository) { }


  async execute(id: string) {
    const monitoring = await this.monitoringRepository.findMonitoringById(id);

    if (!monitoring) {
      throw new Error("Monitoring not found");
    }

    return this.monitoringRepository.deleteMonitoringData(id);
  }
}