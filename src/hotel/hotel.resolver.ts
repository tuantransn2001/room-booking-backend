import { UseFilters, UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { GraphqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { GetPagination } from 'src/common/decorator/getPagination.decorator';
import { PaginationDto } from 'src/common/dto/input/paginationDto';
import { GraphQLErrorFilter } from 'src/filters/custom-exception.filter';
import { CreateHotelDto, CreateRoomDto, ReservationsDto } from './dto';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.type';
import { Room } from './room.type';
import { Category } from './category.type';
import { PaginationDtoOutput } from 'src/common/dto/output/paginationDto';
import { ReservationType } from './reservation.type';

@Resolver()
export class HotelResolver {
  constructor(private readonly hotelService: HotelService) {}
  /* ------------------------------------------------------------------------------------------------------- */
  /*                                               Create Hotel                                              */
  /* hotel to describe the collection of rooms. Still, this could be a single apartment, motel, hostel, etc. */
  /* --------------------------------------------------------------------------------------------------------*/
  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => Hotel, { name: 'createHotel' })
  public async createHotel(
    @Args('createHotelInput') createHotelDto: CreateHotelDto,
  ) {
    return this.hotelService.createHotel(createHotelDto);
  }
  /* -------------------------------------------------------------------------- */
  /*                               Create Room                                  */
  /* -------------------------------------------------------------------------- */
  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => Room, { name: 'createRoom' })
  public async createRoom(
    @Args('createRoomInput') createRoomDto: CreateRoomDto,
  ) {
    return this.hotelService.createRoom(createRoomDto);
  }
  /* -------------------------------------------------------------------------- */
  /*                               Get Rooms                                    */
  /* -------------------------------------------------------------------------- */
  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Query(() => [Room], { name: 'getRooms' })
  public async getRooms(
    @Args('paginationInput') paginationInput: PaginationDto,
    @GetPagination() pagination: PaginationDtoOutput,
  ) {
    return this.hotelService.getRooms(pagination);
  }
  /* -------------------------------------------------------------------------- */
  /*                               Get Category                                 */
  /* -------------------------------------------------------------------------- */
  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Query(() => [Category], { name: 'getCategories' })
  public async getRoomTypes(
    @Args('paginationInput') paginationInput: PaginationDto,
    @GetPagination() pagination: PaginationDtoOutput,
  ) {
    return await this.hotelService.getCategories(pagination);
  }
  /* -------------------------------------------------------------------------- */
  /*                               Booking Room                                 */
  /* -------------------------------------------------------------------------- */
  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => ReservationType, { name: 'reservations' })
  public async reservations(
    @Args('reservationsInput') reservationsDto: ReservationsDto,
  ) {
    return await this.hotelService.reservations(reservationsDto);
  }
}
