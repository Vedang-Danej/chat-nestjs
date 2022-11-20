import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Chat } from 'src/graphql';

import { ChatService } from './chat.service';

@Resolver('chat')
export class ChatResolvers {
  constructor(private readonly chatService: ChatService) {}

  @Query()
  async chats(): Promise<Chat[]> {
    return await this.chatService.findAll();
  }
  @Query()
  async userChat(@Args('userName') userName: string): Promise<Chat[]> {
    return await this.chatService.userChat(userName);
  }

  @Mutation('createMessage')
  async createMessage(@Args() args: Chat): Promise<Chat> {
    return await this.chatService.create(args.user, args.message);
  }
}
