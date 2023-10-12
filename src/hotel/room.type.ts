import { Field, ObjectType } from '@nestjs/graphql';
import { Hotel } from './hotel.type';

@ObjectType()
export class Room {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  roomName?: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  hotelId?: number;

  @Field()
  currentPrice: string;

  @Field(() => Hotel, { nullable: true })
  hotel?: Hotel;
}

@ObjectType()
export class RoomType {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  typeName?: string;

  @Field({ nullable: true })
  description?: string;
}
