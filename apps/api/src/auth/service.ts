import { prisma } from '../main';
import * as bcrypt from 'bcrypt';

export const AuthService = {
  async register(user) {
    return await prisma.user.create({
      data: {
        email: user.email,
        passwordHash: await bcrypt.hash(user.password, 10),
      },
    });
  },
};
