import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()

export class CreateCompanyDto {
  @Field()
  readonly name: string;
  @Field(() => Int)
  readonly age: string;
  @Field()
  readonly breed: string;
}