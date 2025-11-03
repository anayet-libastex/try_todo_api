import mongoose from "mongoose";
import { todoSchema } from "../models/todoModel.js";
const Todo = mongoose.model("Todo", todoSchema);

const getAllData = async (req, res) => {
  try {
    const data = await Todo.find();
    res.status(200).json({
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: "Server Side Error",
    });
  }
};

const getSingleData = async (req, res) => {
  try {
    const data = await Todo.find({_id: req.params.id});
    res.status(200).json({
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: "Server Side Error",
    });
  }
};

const postMultipleData = async (req, res) => {
  try {
     await Todo.insertMany(req.body);
    res.status(200).json({
      success: true,
      message: "Todos Were Inserted Successfully!"
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: "Server Side Error",
    });
  }
};

const postSingleData = async (req, res) => {
  try {
     await Todo.insertOne(req.body);
    res.status(200).json({
      success: true,
      message: "Todos Were Inserted Successfully!"
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: "Server Side Error",
    });
  }
};

const putMultipleData = async (req, res) => {
  try {
     await Todo.updateMany({status: "active"},{
        $set: {
            status: "inactive"
        }
     });
    res.status(200).json({
      success: true,
      message: "Todos Were Updated Successfully!"
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: "Server Side Error",
    });
  }
};

const putSingleData = async (req, res) => {
  try {
     await Todo.updateOne({_id: req.params.id},{
        $set: {
            status: "active"
        }
     });
    res.status(200).json({
      success: true,
      message: "Todo was Updated Successfully!"
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: "Server Side Error",
    });
  }
};

const deleteData = async (req, res) => {
  try {
     await Todo.deleteOne({_id: req.params.id});
    res.status(200).json({
      success: true,
      message: "Todo was Deleted Successfully!"
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: "Server Side Error",
    });
  }
};



export {getAllData};
