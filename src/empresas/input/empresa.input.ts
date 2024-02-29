import { InputType, Field, Int } from "@nestjs/graphql";
import { IsEmail } from "class-validator";
@InputType()
export class CompanyInput {

  @Field()
  readonly name!: string;

  @Field()
  readonly description: string;

  @Field()
  readonly location: string;

  @Field()
  readonly sector: string;

  @Field(() => Int)
  readonly employees: number;

  @Field({ nullable: true })
  readonly annualRevenue: number;

  @Field({ nullable: true })
  readonly website: string;
  @IsEmail()
  @Field()
  readonly email: string;

  @Field()
  readonly foundedDate: Date;

  @Field(() => Int)
  readonly phone: number;

  @Field()
  readonly status: string;

  @Field()
  readonly companyType: string;

  @Field()
  readonly services: string;

  @Field({ nullable: true })
  readonly socialMedia: string;

}
