import { InputType, Field } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsInt,
  IsNumber,
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
  @IsNotEmpty({ message: 'Category is required.' })
  @IsInt()
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
  @IsInt()
  hotelId: number;

  @Field()
  @IsNotEmpty({ message: 'RoomType is required.' })
  @IsInt()
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
  @IsInt({ message: 'RoomId must be a string.' })
  roomId: number;

  @Field()
  @IsNotEmpty({ message: 'GuestId is required.' })
  @IsInt({ message: 'GuestId must be a string.' })
  guestId: number;

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
