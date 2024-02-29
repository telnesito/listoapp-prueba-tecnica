import mongoose from "mongoose";

export const EmpresaSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});