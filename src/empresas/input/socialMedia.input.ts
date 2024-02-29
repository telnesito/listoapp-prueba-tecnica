import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class SocialMediaInput {
  @Field({ nullable: true })

  platform: string;

  @Field({ nullable: true })

  url: string;
}