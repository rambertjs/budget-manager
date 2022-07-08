import { OperationsController } from './controller';
import { Router } from 'express';

const OperationsRouter = Router();

OperationsRouter.get('/', OperationsController.getAll);

OperationsRouter.post('/', OperationsController.create);

OperationsRouter.patch('/:id', OperationsController.update);

OperationsRouter.delete('/:id', OperationsController.delete);
export { OperationsRouter };
