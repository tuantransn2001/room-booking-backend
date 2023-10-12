import { InputType, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsString,
  IsInt,
  IsOptional,
} from 'class-validator';

@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty({ message: 'Fullname is required.' })
  @IsString({ message: 'Fullname must be a string.' })
  fullname: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required.' })
  @MinLength(8, { message: 'Password must be at least 8 characters.' })
  password: string;

  @Field({ nullable: true })
  @IsString({ message: 'UserType must be a string.' })
  @IsOptional()
  userType: string;

  // confirm password must be the same as password

  @Field()
  @IsNotEmpty({ message: 'Confirm Password is required.' })
  // must be the same as password
  confirmPassword: string;

  @Field()
  @IsNotEmpty({ message: 'Email is required.' })
  @IsEmail({}, { message: 'Email must be valid.' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Company is required.' })
  @IsInt({ message: 'Company must be valid.' })
  companyId: number;
}

@InputType()
export class LoginDto {
  @Field()
  @IsNotEmpty({ message: 'Email is required.' })
  @IsEmail({}, { message: 'Email must be valid.' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required.' })
  password: string;
}
