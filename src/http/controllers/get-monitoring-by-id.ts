import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaMonitoringRepository } from "../../repository/prisma/prima-monitoring-repository";
import { GetMonitoringByIdUseCase } from "../../use-case/get-monitoring-by-id";

export async function getMonitoringByIdController(request: FastifyRequest, reply: FastifyReply) {
  const parseSchema = z.object({
    id: z.string(),
  });

  try {
    const { id } = parseSchema.parse(request.params);

    const prismaMonitoringRepository = new PrismaMonitoringRepository();
    const getMonitoringByIdUseCase = new GetMonitoringByIdUseCase(prismaMonitoringRepository);

    const monitoring = await getMonitoringByIdUseCase.execute(id);
    return reply.status(200).send(monitoring);
  } catch (error) {
    if (error instanceof Error && error.message === "Monitoring not found") {
      return reply.status(404).send({
        message: "Monitoring not found",
      });
    }
    console.error("Error creating monitoring:", error);
    return reply.status(500).send({
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}