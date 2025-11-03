import mongoose from "mongoose";
export const connectDB = () => {
  return mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database Connection Successful!"))
    .catch((err) => console.error(err));
};
