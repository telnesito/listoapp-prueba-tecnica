
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Empresa } from './interfaces/empresas.interface';
import { EmpresaInput } from './input/empresa.input';
@Injectable()
export class EmpresasService {
  constructor(@InjectModel('Empresa') private companyModel: Model<Empresa>) { }

  async create(CreateCompanyDto: EmpresaInput): Promise<Empresa> {
    const createdCompany = new this.companyModel(CreateCompanyDto);
    return createdCompany.save();
  }

  async findAll(): Promise<Empresa[]> {
    return this.companyModel.find().exec();
  }

  async deleteById(companyId: string): Promise<Empresa> {
    const deletedCompany = await this.companyModel.findByIdAndDelete(companyId).exec()
    if (!deletedCompany) {
      throw new NotFoundException("La empresa con el id " + companyId + " no fue encontrada")
    }
    return deletedCompany
  }
}
