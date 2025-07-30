import { MonitoringRepository } from "../repository/monitoring-repository";

export class DeleteMonitoringUseCase {
  constructor(private monitoringRepository: MonitoringRepository) { }

  async execute(id: string) {
    return this.monitoringRepository.deleteMonitoringData(id);
  }
}