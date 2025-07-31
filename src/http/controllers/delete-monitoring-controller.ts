import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaMonitoringRepository } from "../../repository/prisma/prima-monitoring-repository";
import { DeleteMonitoringUseCase } from "../../use-case/delete-monitoring";

export async function deleteMonitoringController(
  request: FastifyRequest,
  response: FastifyReply
) {
  const { id } = request.params as { id: string };

  try {
    const prismaMonitoringRepository = new PrismaMonitoringRepository();
    const deleteMonitoringUseCase = new DeleteMonitoringUseCase(
      prismaMonitoringRepository
    );
    await deleteMonitoringUseCase.execute(id);

    return response.status(204).send(); // No content
  } catch (error) {
    if (error instanceof Error && error.message === "Monitoring not found") {
      return response.status(404).send({
        message: "Monitoring not found",
      });
    }
    console.error("Error deleting monitoring:", error);
    return response.status(500).send({
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}