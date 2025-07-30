import { beforeEach, describe, expect, it } from "vitest";
import { MonitoringRepositoryInMemory } from "../repository/in-memory/in-memory-monitoring-";
import { SaveAsMonitoringUseCase } from "./save-as-monitoring";
import { Monitoring } from "../repository/monitoring-repository";
import { log } from "console";

describe("Save as monitoring use case", () => {
  let monitoringRepository: MonitoringRepositoryInMemory;
  let saveAsMonitoringUseCase: SaveAsMonitoringUseCase;
  beforeEach(() => {
    monitoringRepository = new MonitoringRepositoryInMemory();
    saveAsMonitoringUseCase = new SaveAsMonitoringUseCase(monitoringRepository);
  });

  it("should be able to save a monitoring", async () => {
    const response = await saveAsMonitoringUseCase.execute({
      name: "Test Monitoring",
      assunt: "This is a test monitoring",
      hour: "10:00",
      students: "John Doe, Jane Doe",
    });

    expect(response).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: "Test Monitoring",
        assunt: "This is a test monitoring",
        hour: "10:00",
        students: "John Doe, Jane Doe",
        createdAt: expect.any(Date),
      })
    );
  });
});