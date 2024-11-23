import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserControllers'

const router = Router();

// Rotas USER
router.post('/users', new CreateUserController().handle)

export { router };