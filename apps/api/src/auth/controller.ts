import { CustomError } from './../errorMiddleware';
export const AuthController = {
  async login(_req, _res, next) {
    next(new CustomError(501, 'not implemented'));
  },
  async register(_req, _res, next) {
    next(new CustomError(501, 'not implemented'));
  },
};
