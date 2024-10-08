import mongoose from 'mongoose';
import express from 'express';
const router = express.Router();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB: Connected','router: ', router.stack))
  .catch((err) => console.log(err.message,'URI:',process.env.MONGO_URI, ));
