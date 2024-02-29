import { Module } from '@nestjs/common';
import { EmpresasResolver } from './empresas.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './empresas.schema';
import { EmpresasService } from './empresas.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }])

  ],
  providers: [EmpresasResolver, EmpresasService]
})
export class EmpresasModule { }
