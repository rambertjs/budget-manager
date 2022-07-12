import { CustomError } from './../errorMiddleware';
import * as jwt from 'jsonwebtoken';
export const AuthMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    throw new CustomError(401, 'No token provided');
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      throw new CustomError(401, 'Invalid token provided');
    }
    req.userId = decoded.id;
    next();
  });
};
