import { Module } from '@nestjs/common';
import { EmpresasResolver } from './empresas.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpresaSchema } from './empresas.schema';
import { EmpresasService } from './empresas.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Empresa', schema: EmpresaSchema }])

  ],
  providers: [EmpresasResolver, EmpresasService]
})
export class EmpresasModule { }
