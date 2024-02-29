import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { IsEmail, IsNumberString, MaxLength } from "class-validator";

@ObjectType()
// Data transfer object
export class CompanyType {
  @Field(() => ID)
  id: string

  @MaxLength(50)
  @Field()
  readonly name: string;

  @MaxLength(255)
  @Field()
  readonly description: string;

  @MaxLength(255)
  @Field()
  readonly location: string;

  @MaxLength(150)
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

  @MaxLength(25)
  @IsNumberString()
  @Field()
  readonly phone: string;

  @MaxLength(50)
  @Field()
  readonly status: string;

  @Field()
  readonly companyType: string;

  @Field()
  readonly services: string;

  @Field({ nullable: true })
  readonly socialMedia: string;
}