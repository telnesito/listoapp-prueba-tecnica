
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './interfaces/empresas.interface';
import { CompanyInput } from './input/empresa.input';
@Injectable()
export class CompanyService {
  constructor(@InjectModel('Company') private companyModel: Model<Company>) { }

  private async validateCompanyExists(companyId: string): Promise<void> {
    const company = await this.companyModel.findById(companyId).exec();
    if (!company) {
      throw new NotFoundException(`La empresa con el id ${companyId} no fue encontrada`);
    }
  }

  async create(CreateCompanyDto: CompanyInput): Promise<Company> {
    const createdCompany = new this.companyModel(CreateCompanyDto);
    return createdCompany.save();
  }

  async findAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  async deleteById(companyId: string): Promise<Company> {
    await this.validateCompanyExists(companyId)
    const deletedCompany = await this.companyModel.findByIdAndDelete(companyId).exec()
    return deletedCompany
  }

  async getCompanyById(companyId: string): Promise<Company> {
    await this.validateCompanyExists(companyId)
    const companyById = await this.companyModel.findById(companyId).exec()
    return companyById
  }

  async updateCompany(companyId: string, updateCompanyDto: CompanyInput): Promise<Company> {
    await this.validateCompanyExists(companyId)
    const updatedCompany = await this.companyModel.findByIdAndUpdate(companyId, updateCompanyDto, { new: true })
    return updatedCompany
  }

}
