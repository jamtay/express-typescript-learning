import mongoose from 'mongoose';
import { ContactSchema } from './contact';

const {DATABASE_URL = ""} = process.env;
const connectDb = () => {
  return mongoose.connect(DATABASE_URL);
};

const models = {ContactSchema};

export { connectDb };
export default models;