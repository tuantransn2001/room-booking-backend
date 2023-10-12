import { Field, InputType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { ORDER_BY } from './enum';

@InputType()
export class Search {
  @Field()
  @IsString()
  @IsOptional()
  field?: string;

  @Field()
  @IsString()
  @IsOptional()
  value?: string;
}

@InputType()
export class Sort {
  @Field()
  @IsString()
  @IsOptional()
  field?: string;

  @Field()
  @IsEnum(ORDER_BY)
  @IsOptional()
  direction?: ORDER_BY;
}

@InputType()
export class PaginationDto {
  @Field()
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @Min(0)
  page_number?: number;

  @Field()
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @Min(1)
  page_size?: number;

  // @Field(() => [Sort], { nullable: true })
  // @IsOptional()
  // sort?: Sort[];

  // @Field(() => [Search], { nullable: true })
  // @IsOptional()
  // search?: Search[];
}
