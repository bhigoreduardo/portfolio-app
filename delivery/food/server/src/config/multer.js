import multer from "multer";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname, "../public/images"));
  },
  filename: (req, file, callback) => {
    const picturePath = req.userId + "-" + Date.now() + path.extname(file.originalname);
    req.body.image = picturePath;
    callback(null, picturePath);
  },
});

const upload = multer({ storage });

export default upload;