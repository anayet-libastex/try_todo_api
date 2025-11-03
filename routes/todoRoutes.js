import express from "express";
import {
  deleteData,
  getAllData,
  getSingleData,
  postMultipleData,
  postSingleData,
  putMultipleData,
  putSingleData,
} from "../controllers/todoController.js";
const router = express.Router();

//Retrive Todo Data
router.get("/all", getAllData);
router.get("/:id", getSingleData);

//Insert or Create Todo Data
router.post("/all", postMultipleData);
router.post("/single", postSingleData);

//Update Todo Data
router.put("/all", putMultipleData);
router.put("/:id", putSingleData);

//Delete Todo Data
router.delete("/:id", deleteData);

export default router;
