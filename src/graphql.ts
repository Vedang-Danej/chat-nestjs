
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Chat {
    user: string;
    message: string;
}

export abstract class IQuery {
    abstract chats(): Nullable<Nullable<Chat>[]> | Promise<Nullable<Nullable<Chat>[]>>;

    abstract userChat(userName: string): Nullable<Nullable<Chat>[]> | Promise<Nullable<Nullable<Chat>[]>>;
}

export abstract class IMutation {
    abstract createMessage(user?: Nullable<string>, message?: Nullable<string>): Nullable<Chat> | Promise<Nullable<Chat>>;
}

type Nullable<T> = T | null;
