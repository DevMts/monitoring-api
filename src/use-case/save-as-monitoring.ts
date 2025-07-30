import { MonitoringRepository } from "../repository/monitoring-repository";

interface SaveAsMonitoringInput {
  name: string;
  assunt: string;
  hour: string;
  students: string;
}

export class SaveAsMonitoringUseCase {
  constructor(private monitoringRepository: MonitoringRepository) { }

  async execute({ assunt, hour, name, students }: SaveAsMonitoringInput) {
    return this.monitoringRepository.saveMonitoringData({
      assunt,
      hour,
      name,
      students,
    });
  }
}