import { MonitoringRepository } from "../repository/monitoring-repository";

export class GetAllMonitoringUseCase {
  constructor(private monitoringRepository: MonitoringRepository) { }
  async execute() {
    return this.monitoringRepository.getMonitoringData();
  }
}