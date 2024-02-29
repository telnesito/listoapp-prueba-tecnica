import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { EmpresasService } from "./empresas.service";
import { CreateCompanyDto } from "./dto/create-empresa.dto";
import { EmpresaInput } from "./input/empresa.input";

@Resolver()
export class EmpresasResolver {
  constructor(
    private readonly companyService: EmpresasService,

  ) { }


  @Query(() => [CreateCompanyDto])
  async getAllCompanys() {
    return this.companyService.findAll()
  }

  @Mutation(() => CreateCompanyDto)
  async createCompanys(@Args('input') input: EmpresaInput) {
    return this.companyService.create(input)
  }

  @Mutation(() => CreateCompanyDto)
  async deleteCompanyById(@Args('id') id: string) {
    return this.companyService.deleteById(id)
  }



}