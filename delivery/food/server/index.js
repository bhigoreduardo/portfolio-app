import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { ValidationError } from "express-validation";
import colors from "colors";

import routes from './src/routes/index.js';

/* START */
dotenv.config();
const app = express();
const PORT = process.env.SERVER_PORT || 3002;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* CONFIGURATIONS */
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ limit: 1.5 * 1024 * 1024, extended: false }));
app.use(bodyParser.json({ limit: 1.5 * 1024 * 1024, extended: false }));
app.disable("x-powered-by");

/* STATIC FILES */
app.use('/public', express.static(path.join(__dirname, '/src/public')));
app.use('/public/images', express.static(path.join(__dirname, '/src/public/images')));

/* ROUTES */
app.use('/', routes);

/* ERRORS */
app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  if (err instanceof Error) {
    return res.status(400).json({ error: err?.message });
  }

  return res.status(500).json(err?.message);
});

/* MONGOOSE SETUP */
mongoose.set('strictQuery', true);
mongoose.connect(process.env.SERVER_DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => {
    console.log(`CORS-enabled api server on: http://localhost:${PORT}`.bgCyan.white);
    console.log(`Conneted to Mongo`.bgMagenta.white)
  });
}).catch((error) => {
  console.log(`${error} did not connect`.bgRed.white);
});
