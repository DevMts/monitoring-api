import { beforeEach, describe, expect, it } from "vitest";
import { MonitoringRepositoryInMemory } from "../repository/in-memory/in-memory-monitoring-";
import { SaveAsMonitoringUseCase } from "./save-as-monitoring";
import { DeleteMonitoringUseCase } from "./delete-monitoring";

describe("Delete as monitoring use case", () => {
  let monitoringRepository: MonitoringRepositoryInMemory;
  let saveAsMonitoringUseCase: SaveAsMonitoringUseCase;
  let deleteMonitoringUseCase: DeleteMonitoringUseCase;
  beforeEach(() => {
    monitoringRepository = new MonitoringRepositoryInMemory();
    saveAsMonitoringUseCase = new SaveAsMonitoringUseCase(monitoringRepository);
    deleteMonitoringUseCase = new DeleteMonitoringUseCase(monitoringRepository);
  });

  it("should be able to delete a monitoring", async () => {
    const response = await saveAsMonitoringUseCase.execute({
      name: "Test Monitoring",
      assunt: "This is a test monitoring",
      hour: "10:00",
      students: "John Doe, Jane Doe",
    });

    await deleteMonitoringUseCase.execute(response.id);

    const allMonitorings = await monitoringRepository.getMonitoringData();
    expect(allMonitorings).toHaveLength(0);
  });
});