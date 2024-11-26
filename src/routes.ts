import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserControllers';
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();

// Rotas USER
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

export { router };