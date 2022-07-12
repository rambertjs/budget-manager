import { AuthService } from './service';

export const AuthController = {
  async login(req, res, next) {
    const { email, password } = req.body;
    AuthService.login(email, password)
      .then((user) => res.json(user))
      .catch(next);
  },
  async register(req, res, next) {
    const { email, password } = req.body;
    AuthService.register({ email, password })
      .then(res.status(201).json({ message: 'user created' }))
      .catch(next);
  },
};
