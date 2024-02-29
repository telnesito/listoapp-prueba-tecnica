import mongoose from "mongoose";

export const EmpresaSchema = new mongoose.Schema({
  id: String,

  name: String,

  description: String,

  location: String,

  sector: String,

  employees: Number,

  annualRevenue: Number,

  website: String,

  email: String,

  foundedDate: Date,

  phone: Number,

  status: String,

  companyType: String,

  services: String,

  socialMedia: String
});