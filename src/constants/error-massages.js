export const require = 'Field required';
export const onlyLetters = 'Field must contain only letters';
export const isMongoId = 'Field must be mongo id';
export const isString = 'Field must be string type';
export const email = 'An invalid email';
export const wrongColor = 'Wrong color';
export const isNotBoolean = 'The field must contain `true` or `false` ';
export const onlyDecimals = 'The field must contain only decimal numbers ';
export const fromToString = (min, max) => `Field must contain from ${min} to ${max} characters `;
export const fromToInteger = (min, max) => `Age must be from ${min} to ${max} integer `;
export const notFound = (smt) => ([`${smt} not found`, 404]);

// User
export const usernameExist = 'Username exists';
export const emailExist = 'Email already exists';
export const notVerifiedEmail = 'Email is not verified, verification code is sent to your email ';
export const expiredToken = 'Token has been expired';

// Ram
export const wrongGeneration = 'Wrong generation, must be "ddr3", "ddr4" or "ddr5"]';

// Auth
export const invalidCred = 'Invalid credentials';

export const notAuth = 'Not Authorized';
