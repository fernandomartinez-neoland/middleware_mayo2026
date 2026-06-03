import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://fernandomartinez_db_user:123@cluster0.w6ghmta.mongodb.net/mayo2026")
  .then(() => console.log("Connected!"))
  .catch(console.error);

export const base = mongoose;
