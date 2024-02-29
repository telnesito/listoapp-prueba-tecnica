import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CompanyService } from "./empresas.service";
import { CompanyType } from "./dto/create-empresa.dto";
import { CompanyInput } from "./input/empresa.input";

@Resolver()
export class CompanyResolver {
  constructor(
    private readonly companyService: CompanyService,

  ) { }


  @Query(() => [CompanyType])
  async getAllCompanys() {
    return this.companyService.findAll()
  }

  @Mutation(() => CompanyType)
  async createCompanys(@Args('input') input: CompanyInput) {
    return this.companyService.create(input)
  }

  @Mutation(() => CompanyType)
  async deleteCompanyById(@Args('_id') _id: string) {
    return this.companyService.deleteById(_id)
  }

  @Query(() => CompanyType)
  async getCompanyById(@Args('_id') _id: string) {
    return this.companyService.getCompanyById(_id)
  }


}