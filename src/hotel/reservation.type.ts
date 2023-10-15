import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ReservationType {

  @Field({ nullable: true })
  checkin_date?: Date;

  @Field({ nullable: true })
  checkout_date?: Date;

  @Field({ nullable: true })
  room_type?: string;

  @Field({ nullable: true })
  guest_name?: string;

  @Field({ nullable: true })
  guest_email?: string;

  @Field({ nullable: true })
  additional_requests?: string;
}
