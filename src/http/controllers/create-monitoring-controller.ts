import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { SaveAsMonitoringUseCase } from "../../use-case/save-as-monitoring";
import { PrismaMonitoringRepository } from "../../repository/prisma/prima-monitoring-repository";

export async function createMonitoringController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const bodySchema = z.object({
    name: z.string(),
    assunt: z.string(),
    hour: z.string(),
    students: z.string(),
  });

  try {
    const { name, assunt, hour, students } = bodySchema.parse(request.body);

    const prismaMonitoringRepository = new PrismaMonitoringRepository();
    const createMonitoringUseCase = new SaveAsMonitoringUseCase(
      prismaMonitoringRepository);
    const monitoring = await createMonitoringUseCase.execute({
      name,
      assunt,
      hour,
      students,
    });
    return response.status(201).send(monitoring);
  } catch (error) {
    console.error("Error creating monitoring:", error);
    return response.status(500).send({
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}