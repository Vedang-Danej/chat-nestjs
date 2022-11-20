import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageGateway } from 'src/message/message.gateway';
import { ChatResolvers } from './chat.resolvers';
import { ChatService } from './chat.service';
import { ChatSchema } from './schemas/chat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Chat', schema: ChatSchema }])],
  providers: [ChatService, ChatResolvers, MessageGateway],
})
export class VideoModule {}
