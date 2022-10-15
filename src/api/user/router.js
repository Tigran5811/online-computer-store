import { Router } from 'express';
import {
  addData, getUsers, getUser, delIndex, ubdateUser,
} from './service.js';

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
router.delete('/:index', async (req, res) => {
  const { index } = req.params;

  await delIndex(Number(index));
  res.send('success');
});

router.post('/:index', async (req, res) => {
  try {
    const { index } = req.params;
    const { body } = req;
    await ubdateUser(Number(index), body);
    res.send('ok');
  } catch (error) {
    res.send('err ab');
  }
});

router.post('/', async (req, res) => {
  try {
    const { body } = req;
    await addData(body);
    res.send('success');
  } catch (error) {
    res.send('s');
  }
});

export default router;
