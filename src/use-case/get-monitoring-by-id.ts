import { MonitoringRepository } from "../repository/monitoring-repository";

export class GetMonitoringByIdUseCase {
  constructor(private monitoringRepository: MonitoringRepository) { }
  async execute(id: string) {
    const monitoring = this.monitoringRepository.findMonitoringById(id);

    if (!monitoring) {
      throw new Error("Monitoring not found");
    }

    return monitoring
  }
}