import { InputType, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
} from 'class-validator';

@InputType()
export class CreateHotelDto {
  @Field()
  @IsNotEmpty({ message: 'HotelName is required.' })
  @IsString({ message: 'HotelName must be a string.' })
  hotelName: string;

  @Field()
  @IsOptional()
  @IsString({ message: 'Description must be a string.' })
  description: string;

  @Field()
  @IsNotEmpty({ message: 'City is required.' })
  @IsNumber()
  cityId: number;

  @Field()
  @IsNotEmpty({ message: 'Category is required.' })
  @IsNumber()
  categoryId: number;
}

@InputType()
export class CreateRoomDto {
  @Field()
  @IsNotEmpty({ message: 'HotelName is required.' })
  @IsString({ message: 'HotelName must be a string.' })
  roomName: string;

  @Field()
  @IsNotEmpty({ message: 'HotelName is required.' })
  @IsString({ message: 'HotelName must be a string.' })
  description: string;

  @Field()
  @IsNotEmpty({ message: 'Hotel Own is required.' })
  @IsNumber()
  hotelId: number;

  @Field()
  @IsNotEmpty({ message: 'RoomType is required.' })
  @IsNumber()
  roomTypeId: number;

  @Field()
  @IsNotEmpty({ message: 'Price is required.' })
  @IsString({ message: 'Price must be a string.' })
  currentPrice: string;
}

@InputType()
export class ReservationsDto {
  @Field()
  @IsNotEmpty({ message: 'RoomId is required.' })
  @IsNumber()
  roomId: number;

  @Field()
  @IsNotEmpty({ message: 'UserId is required.' })
  @IsNumber()
  userId: number;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'StartDate is required.' })
  startDate: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'EndDate is required.' })
  endDate: string;

  @Field()
  @IsOptional()
  @IsNumber()
  discountPercent?: number;
}
@InputType()
export class GetHotelByIdDto {
  @Field()
  @IsNotEmpty({ message: 'id is required.' })
  @IsNumber()
  id: number;
}

@InputType()
export class GetUserReservationByIdDto {
  @Field()
  @IsNotEmpty({ message: 'id is required.' })
  @IsNumber()
  userId: number;
}

@InputType()
export class GetCountryDto {
  @Field()
  @IsOptional()
  @IsBoolean()
  all?: boolean;
}
