import { signUpService, signInService, verifyEmailService } from './service.js';

export const signUpController = async (req, res, next) => {
  try {
    const { body } = req;
    const created = await signUpService(body);
    res.send(created);
  } catch (err) {
    next(err);
  }
};

export const signInController = async (req, res, next) => {
  try {
    const { body } = req;
    console.log(body);
    const token = await signInService(body);
    res.send({ token });
  } catch (err) {
    next(err);
  }
};

export const verifyEmailController = async (req, res, next) => {
  try {
    await verifyEmailService(req.body);
    res.send({ message: 'Verified' });
  } catch (err) {
    next(err);
  }
};
