import { Field, ObjectType } from '@nestjs/graphql';
import { Room } from './room.type';

@ObjectType()
export class Hotel {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  hotelName?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  categoryId?: number;

  @Field(() => [Room], { nullable: true })
  rooms?: Room[];
}
