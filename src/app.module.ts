import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { EmpresasModule } from './empresas/empresas.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,

    }),
    ConfigModule.forRoot({
      envFilePath: '.develop.env'
    }),

    EmpresasModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_URI
      })
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
