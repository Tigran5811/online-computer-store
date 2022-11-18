import multer from 'multer';

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/uploads/images');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname.replace(/ /g, '_')}`);
  },
});

export const upload = multer({ storage: fileStorageEngine });
