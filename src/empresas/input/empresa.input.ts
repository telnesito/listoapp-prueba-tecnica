import { InputType, Field, Int } from "@nestjs/graphql";
import { IsEmail, MaxLength, } from "class-validator";
import { SocialMediaInput } from "./socialMedia.input";
@InputType()
export class CompanyInput {
  @MaxLength(50)
  @Field({ description: 'El nombre de la empresa' })
  readonly name!: string;

  @MaxLength(255)
  @Field({ description: 'Una breve descripción de la empresa y sus actividades' })
  readonly description: string;

  @Field(() => [String], { description: 'La ubicación física de la empresa (dirección, ciudad, país)' })
  readonly location: string[];

  @Field(() => [String], { description: ' El sector al que pertenece la empresa (tecnología, salud, finanzas, etc.)' })
  readonly sector: string[];

  @Field(() => Int, { description: ' La cantidad de empleados que tiene la empresa.' })
  readonly employees: number;

  @Field({ nullable: true, description: 'Los ingresos anuales de la empresa' })
  readonly annualRevenue: number;

  @Field(() => [String], { nullable: true, description: 'La dirección web de la empresa' })
  readonly website: string[];

  @IsEmail()
  @Field({ description: 'El correo electrónico de contacto de la empresa' })
  readonly email: string;

  @Field({ description: 'La fecha en que fue fundada la empresa yyyy-mm-dd.' })
  readonly foundedDate: Date;

  @Field(() => [String], { description: 'El número de teléfono de la empresa.' })
  readonly phone: string[];

  @Field({ description: 'Estado actual de la empresa (activo, inactivo, en proceso de liquidación, etc.)' })
  readonly status: string;

  @Field(() => [String], { description: 'Puede ser una clasificación como PYME, startup, corporación, etc.' })
  readonly companyType: string[];

  @Field(() => [String], { description: 'Este campo almacena el servicios que ofrezca la empresa' })
  readonly services: string[];

  @Field(() => [SocialMediaInput], { nullable: true, description: 'Enlaces a perfiles de redes sociales de la empresa (LinkedIn, Twitter, etc.).' })
  readonly socialMedia: SocialMediaInput[];

}
