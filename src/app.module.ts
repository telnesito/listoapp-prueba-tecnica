import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { EmpresasModule } from './empresas/empresas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver
    }),
    EmpresasModule,
    MongooseModule.forRoot('mongodb+srv://telne:1HpQ12ItyMAErNUp@companys.z05fhdl.mongodb.net/?retryWrites=true&w=majority&appName=Companys'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
