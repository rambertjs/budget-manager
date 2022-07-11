import { CustomError } from './../errorMiddleware';
export const AuthController = {
  async login(_req, _res) {
    throw new CustomError(501, 'not implemented');
  },
  async register(_req, _res) {
    throw new CustomError(501, 'not implemented');
  },
};
