import { Module } from '@nestjs/common';
import { CompanyResolver } from './empresas.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './empresas.schema';
import { CompanyService } from './empresas.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }])

  ],
  providers: [CompanyResolver, CompanyService]
})
export class EmpresasModule { }
