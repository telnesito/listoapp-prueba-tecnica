import { Document } from "mongoose";

export interface Empresa extends Document {
  readonly id: string

  readonly name: string;

  readonly description: string;

  readonly location: string;

  readonly sector: string;

  readonly employees: number;

  readonly annualRevenue: number;

  readonly website: string;

  readonly email: string;

  readonly foundedDate: Date;

  readonly phone: number;

  readonly status: string;

  readonly companyType: string;

  readonly services: string;

  readonly socialMedia: string;
}