import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import userRoutes from './routes/userRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
const app = express();
dotenv.config();

//JSON PARSER
app.use(express.json());

//CONNECT DATABASE
connectDB();

//ROUTES HANDLE
app.use("/api/users",userRoutes);
app.use("/api/todos",todoRoutes);

//404 ROUTE HANDLE
app.all("*splat", (req, res) => {
  res.status(404).json({
    succss: false,
    message: "Requested Url was Not Found!",
  });
});

//DEFAULT ERROR HANDLER
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Listening on Port ${process.env.PORT}`);
});
