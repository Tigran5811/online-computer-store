import {
 signUpService, signInService, verifyEmailService, forgetPasswordService, recoverPasswordService,
} from './service.js';

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
export const forgetPasswordController = async (req, res, next) => {
  try {
    await forgetPasswordService(req.body);
    res.send({ message: 'Check yours email' });
  } catch (err) {
    next(err);
  }
};
export const recoverPasswordController = async (req, res, next) => {
  try {
    await recoverPasswordService(req.body);
    res.send({ message: 'success' });
  } catch (err) {
    next(err);
  }
};
