import mongoose from "mongoose";

export const CompanySchema = new mongoose.Schema({

  name: String,

  description: String,

  location: Array,

  sector: Array,

  employees: Number,

  annualRevenue: Number,

  website: Array,

  email: String,

  foundedDate: Date,

  phone: Array,

  status: String,

  companyType: Array,

  services: Array,

  socialMedia: Object
});