import { InputType, Field, Int } from "@nestjs/graphql";
@InputType()
export class EmpresaInput {
  @Field()
  readonly name: string;
  @Field(() => Int)
  readonly age: string;
  @Field()
  readonly breed: string;
}