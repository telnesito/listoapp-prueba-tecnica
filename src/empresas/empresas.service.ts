
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Empresa } from './interfaces/empresas.interface';
import { CreateCompanyDto } from './dto/create-empresa.dto';
@Injectable()
export class EmpresasService {
  constructor(@InjectModel('Empresa') private companyModel: Model<Empresa>) { }

  async create(CreateCompanyDto: CreateCompanyDto): Promise<Empresa> {
    const createdCompany = new this.companyModel(CreateCompanyDto);
    return createdCompany.save();
  }

  async findAll(): Promise<Empresa[]> {
    return this.companyModel.find().exec();
  }
}
