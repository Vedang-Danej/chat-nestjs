import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat } from './interfaces/chat.interface';
import { MessageGateway } from 'src/message/message.gateway';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel('Chat') private readonly chatModel: Model<Chat>,
    private readonly messageGateway: MessageGateway,
  ) {}

  async findAll(): Promise<Chat[]> {
    return await this.chatModel.find();
  }

  async userChat(userName: string): Promise<Chat[]> {
    console.log(userName);
    return await this.chatModel.find({ user: userName });
  }

  async create(user: string, message: string): Promise<Chat> {
    const newChat = new this.chatModel({
      user,
      message,
    });
    this.messageGateway.server.emit('chat message', newChat);
    return await newChat.save();
  }
}
