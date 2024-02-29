import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SocialMediaType {
  @Field({ nullable: true })
  platform: string;

  @Field({ nullable: true })

  url: string;
}