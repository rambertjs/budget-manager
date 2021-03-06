import { AuthController } from './controller';
import { Router } from 'express';

const AuthRouter = Router();

AuthRouter.post('/register', AuthController.register);
AuthRouter.post('/login', AuthController.login);

export { AuthRouter };
