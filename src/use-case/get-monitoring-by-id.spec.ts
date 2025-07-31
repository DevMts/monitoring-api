import { beforeEach, describe, expect, it } from "vitest";
import { MonitoringRepositoryInMemory } from "../repository/in-memory/in-memory-monitoring-";
import { GetMonitoringByIdUseCase } from "./get-monitoring-by-id";
import { SaveAsMonitoringUseCase } from "./save-as-monitoring";

describe("Get monitoring by id use case", () => {
  let monitoringRepository: MonitoringRepositoryInMemory;
  let getMonitoringByIdUseCase: GetMonitoringByIdUseCase;
  let createdMonitoring: SaveAsMonitoringUseCase;

  beforeEach(() => {
    monitoringRepository = new MonitoringRepositoryInMemory();
    getMonitoringByIdUseCase = new GetMonitoringByIdUseCase(monitoringRepository);
    createdMonitoring = new SaveAsMonitoringUseCase(monitoringRepository);
  });
  it("should be able to get a monitoring by id", async () => {
    const savedMonitoring = await createdMonitoring.execute({
      name: "Test Monitoring",
      assunt: "This is a test monitoring",
      hour: "10:00",
      students: "John Doe, Jane Doe",
    });

    const response = await getMonitoringByIdUseCase.execute(savedMonitoring.id);
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