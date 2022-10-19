import { Router } from 'express';
import {
  addData, getUsers, getUser, delIndex, ubdateUser,
} from './service.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await getUsers();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:index', async (req, res, next) => {
  try {
    const { index } = req.params;
    const user = await getUser(Number(index));
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.delete('/:index', async (req, res, next) => {
  try {
    const { index } = req.params;
    await delIndex(Number(index));
    res.send('success');
  } catch (error) {
    next(error);
  }
});

router.put('/:index', async (req, res, next) => {
  try {
    const { index } = req.params;
    const { body } = req;
    await ubdateUser(Number(index), body);
    res.send('success');
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { body } = req;
    await addData(body);
    res.send('success');
  } catch (error) {
    next(error);
  }
});

export default router;
