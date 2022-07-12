import { prisma } from '../main';

export const OperationsService = {
  async create(operation) {
    return await prisma.operation.create({ data: operation });
  },
  async getBalance(userId) {
    const preBalance = await prisma.operation.groupBy({
      by: ['type'],
      _sum: {
        amount: true,
      },
      where: {
        userId,
      },
    });
    return {
      income: preBalance[1]?._sum.amount ?? 0,
      expenses: preBalance[0]?._sum.amount ?? 0,
      balance: preBalance[1]?._sum.amount - preBalance[0]?._sum.amount || 0,
    };
  },
  async getAll(lookupParams) {
    return await prisma.operation.findMany({
      ...lookupParams,
      orderBy: { date: 'desc' },
    });
  },
  async getPage(page, lookupParams) {
    return {
      operations: await prisma.operation.findMany({
        ...lookupParams,
        orderBy: { date: 'desc' },
        skip: (page - 1) * 10,
        take: 10,
      }),
      totalPages: Math.ceil(
        (await prisma.operation.count({
          ...lookupParams,
        })) / 10
      ),
    };
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
