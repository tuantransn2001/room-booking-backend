import { UseFilters, UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { GraphqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { GetPagination } from 'src/common/decorator/getPagination.decorator';
import { PaginationDto } from 'src/common/dto/paginationDto';
import { GraphQLErrorFilter } from 'src/filters/custom-exception.filter';
import { CreateHotelDto, CreateRoomDto } from './dto';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.type';
import { Room, RoomType } from './room.type';

@Resolver()
export class HotelResolver {
  constructor(private readonly hotelService: HotelService) {}

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => Hotel, { name: 'createHotel' })
  public async createHotel(
    @Args('createHotelInput') createHotelDto: CreateHotelDto,
  ) {
    return this.hotelService.createHotel(createHotelDto);
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => Room, { name: 'createRoom' })
  public async createRoom(
    @Args('createRoomInput') createRoomDto: CreateRoomDto,
  ) {
    return this.hotelService.createRoom(createRoomDto);
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Query(() => [Room], { name: 'getRooms' })
  public async getRooms(
    @Args('paginationInput') paginationInput: PaginationDto,
    @GetPagination() pagination: PaginationDto,
  ) {
    return this.hotelService.getRooms(pagination);
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => Room, { name: 'bookRoom' })
  public async bookRoom() {
    return 'coding...';
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Query(() => [RoomType], { name: 'getRoomTypes' })
  public async getRoomTypes(
    @Args('paginationInput') paginationInput: PaginationDto,
    @GetPagination() pagination: PaginationDto,
  ) {
    console.log(await this.hotelService.getRoomTypes(pagination));
    return await this.hotelService.getRoomTypes(pagination);
  }
}
