import mongoose from 'mongoose';
import app from './app';
import { Messages } from './constants';

process.env.DB_HOST &&
  mongoose
    .connect(process.env.DB_HOST)
    .then(() => {
      app.listen(process.env.PORT || 3000);
      console.log(Messages.dbConnectSuccess);
    })
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
