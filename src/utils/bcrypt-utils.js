import bcrypt from 'bcrypt';

const { SALT_ROUNDS } = process.env;

export const hashPassword = async (pass) => bcrypt.hash(pass, Number(SALT_ROUNDS));

export const comparePassword = async (pass, hash) => {
   const compared = await bcrypt.compare(pass, hash);
   if (!compared) {
        throw new Error();
   }
   return compared;
};
