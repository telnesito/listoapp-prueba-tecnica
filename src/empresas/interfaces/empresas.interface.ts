import { Document } from "mongoose";

export interface Empresa extends Document {
  readonly name: string;
  readonly age: string;
  readonly breed: string;
}