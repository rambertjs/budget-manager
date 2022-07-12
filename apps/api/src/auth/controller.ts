import { AuthService } from './service';
import { CustomError } from './../errorMiddleware';
export const AuthController = {
  async login(_req, _res, next) {
    next(new CustomError(501, 'not implemented'));
  },
  async register(req, res, next) {
    const { email, password } = req.body;
    AuthService.register({ email, password })
      .then(res.status(201).json({ message: 'user created' }))
      .catch(next);
  },
};
