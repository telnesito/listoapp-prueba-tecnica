import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { IsEmail, IsNumberString } from "class-validator";

@ObjectType()
// Data transfer object
export class CompanyType {
  @Field(() => ID)
  id: string

  @Field()
  readonly name: string;

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
  @IsNumberString()
  @Field()
  readonly phone: string;

  @Field()
  readonly status: string;

  @Field()
  readonly companyType: string;

  @Field()
  readonly services: string;

  @Field({ nullable: true })
  readonly socialMedia: string;
}