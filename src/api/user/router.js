import { Router } from 'express';
import {
  getUsersController, getUserController, createUserController,
  delIndexController, updateUserController,
} from './controller.js';
import { validateCreateUser, validateUpdateUser } from './validation.js';

const router = Router();

router.get('/', getUsersController);

router.get('/:index', getUserController);

router.delete('/:index', delIndexController);

router.put('/:index', validateUpdateUser, updateUserController);

router.post('/', validateCreateUser, createUserController);

export default router;
