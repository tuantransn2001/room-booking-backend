import { Field, ObjectType } from '@nestjs/graphql';
import { RegisterCardDetailStatus } from './enum';

@ObjectType()
export class RegisterCardDetail {
  @Field()
  status: RegisterCardDetailStatus;
}
