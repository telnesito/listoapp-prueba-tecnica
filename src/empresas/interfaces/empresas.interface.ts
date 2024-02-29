import { Document } from "mongoose";
import { SocialMediaType } from "../dto/socialMediaType";

export interface Company extends Document {

  readonly name: string;

  readonly description: string;

  readonly location: string[];

  readonly sector: string[];

  readonly employees: number;

  readonly annualRevenue: number;

  readonly website: string[];

  readonly email: string;

  readonly foundedDate: Date;

  readonly phone: string[];

  readonly status: string;

  readonly companyType: string[];

  readonly services: string[];

  readonly socialMedia: SocialMediaType[];
}