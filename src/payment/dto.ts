import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
class UserAddress {
  @Field()
  @IsString()
  @IsNotEmpty()
  city?: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  country?: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  line1?: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  line2?: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  postal_code?: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  state?: string;
}

@InputType()
export class RegisterCardDetailDto {
  @Field()
  @IsOptional()
  @IsNumber()
  userId?: number;

  @Field()
  @IsOptional()
  @IsString()
  name?: string;

  @Field()
  @IsOptional()
  @IsEmail()
  email: string;

  @Field()
  @IsOptional()
  @IsString()
  description: string;

  @Field(() => UserAddress)
  address: UserAddress;
}
