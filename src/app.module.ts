import { Module } from '@nestjs/common';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { Mongoose } from 'mongoose';
import { VideoModule } from './chats/chat.module';
import { MessageGateway } from './message/message.gateway';

@Module({
  imports: [
    VideoModule,
    MongooseModule.forRoot(config.mongoURI),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MessageGateway],
})
export class AppModule {}
