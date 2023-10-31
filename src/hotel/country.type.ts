import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Country {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  countryName?: string;
}
