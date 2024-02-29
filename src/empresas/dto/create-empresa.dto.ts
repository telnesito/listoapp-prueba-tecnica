import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { IsEmail, MaxLength } from "class-validator";
import { SocialMediaType } from "./socialMediaType";

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


  @Field(() => [String])
  readonly location: string[];


  @Field(() => [String])
  readonly sector: string[];


  @Field(() => Int)
  readonly employees: number;

  @Field({ nullable: true })
  readonly annualRevenue: number;

  @Field(() => [String], { nullable: true })
  readonly website: string[];

  @IsEmail()
  @Field()
  readonly email: string;

  @Field()
  readonly foundedDate: Date;

  @Field(() => [String])
  readonly phone: string[];

  @MaxLength(50)
  @Field()
  readonly status: string;

  @Field(() => [String])

  readonly companyType: string[];

  @Field(() => [String])

  readonly services: string[];

  @Field(() => [SocialMediaType], { nullable: true })
  readonly socialMedia: SocialMediaType[];
}

