import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RoomType {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  typeName?: string;

  @Field({ nullable: true })
  description?: string;
}
