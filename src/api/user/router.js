import { Router } from 'express';
import { addUser, getUser, getUsers } from './service.js';

const router = Router();

router.get('/', async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

router.get('/:index', async (req, res) => {
  const { index } = req.params;
  const user = await getUser(Number(index));
  res.send(user);
});

router.post('/', async (req, res) => {
  const { body } = req;
  await addUser(body.username, body.password);
  res.send('success');
});

export default router;
