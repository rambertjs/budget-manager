import { prisma } from '../main';

export const OperationsService = {
  async create(operation) {
    return await prisma.operation.create({ data: operation });
  },
  async getBalance() {
    const preBalance = await prisma.operation.groupBy({
      by: ['type'],
      _sum: {
        amount: true,
      },
    });
    return {
      income: preBalance[1]._sum.amount,
      expenses: preBalance[0]._sum.amount,
    };
  },
  async getAll(lookupParams) {
    return await prisma.operation.findMany({
      ...lookupParams,
      orderBy: { date: 'desc' },
    });
  },
  async update(operationId, data) {
    return await prisma.operation.update({
      where: {
        id: operationId,
      },
      data,
    });
  },
  async delete(operationId) {
    return await prisma.operation.delete({ where: { id: operationId } });
  },
};
