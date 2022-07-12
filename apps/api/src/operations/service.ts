import { CustomError } from './../errorMiddleware';
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
  async update(operationId, data, userId) {
    const operation = await prisma.operation.findUnique({
      where: {
        id: operationId,
      },
    });
    if (!operation) {
      throw new CustomError(404, 'Operation not found');
    }
    if (operation.userId !== userId) {
      throw new CustomError(403, 'Operation does not belong to user');
    }

    return await prisma.operation.update({
      where: {
        id: operationId,
      },
      data,
    });
  },
  async delete(operationId, userId) {
    // delete if operation belongs to user
    const operation = await prisma.operation.findUnique({
      where: {
        id: operationId,
      },
    });
    if (!operation) {
      throw new CustomError(404, 'Operation not found');
    }
    if (operation.userId !== userId) {
      throw new CustomError(403, 'Operation does not belong to user');
    }
    return await prisma.operation.delete({
      where: {
        id: operationId,
      },
    });
  },
};
