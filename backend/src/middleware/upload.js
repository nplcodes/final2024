import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');  // Store the uploaded files in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);  // Use a unique filename for each uploaded file
  }
});

const upload = multer({ storage });

export default upload;
