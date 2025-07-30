import { beforeEach, describe, expect, it } from "vitest";
import { MonitoringRepositoryInMemory } from "../repository/in-memory/in-memory-monitoring-";
import { SaveAsMonitoringUseCase } from "./save-as-monitoring";
import { GetAllMonitoringUseCase } from "./get-all-monitoring";
import { log } from "console";

describe("Get all monitoring use case", () => {
  let monitoringRepository: MonitoringRepositoryInMemory;
  let saveAsMonitoringUseCase: SaveAsMonitoringUseCase;
  let getAllMonitoringUseCase: GetAllMonitoringUseCase
  beforeEach(() => {
    monitoringRepository = new MonitoringRepositoryInMemory();
    saveAsMonitoringUseCase = new SaveAsMonitoringUseCase(monitoringRepository);
    getAllMonitoringUseCase = new GetAllMonitoringUseCase(monitoringRepository);
  });

  it("should be able to get all monitoring", async () => {
    saveAsMonitoringUseCase.execute({
      name: "Test Monitoring",
      assunt: "This is a test monitoring",
      hour: "10:00",
      students: "John Doe, Jane Doe",
    });

    saveAsMonitoringUseCase.execute({
      name: "Test Monitoring 2",
      assunt: "This is a test monitoring",
      hour: "10:00",
      students: "John Doe, Jane Doe",
    });

    const response = await getAllMonitoringUseCase.execute();
    log(response);
    expect(response).toEqual([
      {
        id: expect.any(String),
        name: "Test Monitoring",
        assunt: "This is a test monitoring",
        hour: "10:00",
        students: "John Doe, Jane Doe",
        createdAt: expect.any(Date),
      },
      {
        id: expect.any(String),
        name: "Test Monitoring 2",
        assunt: "This is a test monitoring",
        hour: "10:00",
        students: "John Doe, Jane Doe",
        createdAt: expect.any(Date),
      },
    ]);
    expect(response.length).toBe(2);

  });
});