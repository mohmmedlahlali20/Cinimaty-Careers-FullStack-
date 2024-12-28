import nextConnect from 'next-connect';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); 
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(500).json({ error: `Something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('cv')); 

apiRoute.post((req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'File upload failed.' });
  }
  const filePath = `/uploads/${req.file.filename}`;
  res.status(201).json({ success: true, filePath });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
