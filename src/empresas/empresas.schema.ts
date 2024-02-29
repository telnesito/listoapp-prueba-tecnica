import mongoose from "mongoose";

export const CompanySchema = new mongoose.Schema({

  name: String,

  description: String,

  location: String,

  sector: String,

  employees: Number,

  annualRevenue: Number,

  website: String,

  email: String,

  foundedDate: Date,

  phone: String,

  status: String,

  companyType: String,

  services: String,

  socialMedia: String
});