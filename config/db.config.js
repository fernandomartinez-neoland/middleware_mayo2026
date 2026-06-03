import mongoose from "mongoose";
import 'dotenv/config'

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Connected!"))
  .catch(console.error);

export const base = mongoose;
