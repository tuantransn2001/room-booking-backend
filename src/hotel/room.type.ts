import { Field, ObjectType } from '@nestjs/graphql';
import { Hotel } from './hotel.type';
import { RoomType } from './roomType';

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

  @Field(() => RoomType, { nullable: true })
  roomType?: RoomType;
}
