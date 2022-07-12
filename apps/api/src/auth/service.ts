import { prisma } from '../main';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { CustomError } from '../errorMiddleware';

export const AuthService = {
  async register(user) {
    return await prisma.user.create({
      data: {
        email: user.email,
        passwordHash: await bcrypt.hash(user.password, 10),
      },
    });
  },
  async login(email, password) {
    const ERROR_UNAUTHORIZED = new CustomError(401, 'Invalid credentials');
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw ERROR_UNAUTHORIZED;
    }
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      throw ERROR_UNAUTHORIZED;
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    console.log('Hello from service!');
    return {
      token,
      email,
    };
  },
};
