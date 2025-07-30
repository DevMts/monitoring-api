import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { SaveAsMonitoringUseCase } from "../../use-case/save-as-monitoring";
import { PrismaMonitoringRepository } from "../../repository/prisma/prima-monitoring-repository";
import { GetAllMonitoringUseCase } from "../../use-case/get-all-monitoring";

export async function getAllMonitoringController(
  request: FastifyRequest,
  response: FastifyReply,
) {


  try {

    const prismaMonitoringRepository = new PrismaMonitoringRepository();
    const getAllMonitoringUseCase = new GetAllMonitoringUseCase(
      prismaMonitoringRepository);
    const monitoring = await getAllMonitoringUseCase.execute();
    return response.status(201).send(monitoring);


  } catch (error) {
    console.error("Error creating monitoring:", error);
    return response.status(500).send({
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}