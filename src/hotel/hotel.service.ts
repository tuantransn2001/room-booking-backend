import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateHotelDto, CreateRoomDto, ReservationsDto } from './dto';
import { PaginationDtoOutput } from 'src/common/dto/output/paginationDto';
import { ReservationStatus } from './enum';
import { ReservationType } from './reservation.type';

@Injectable()
export class HotelService {
  constructor(private readonly prisma: PrismaService) {}

  public async getHotel(hotelId: number) {
    return this.prisma.hotel.findUnique({
      where: {
        id: hotelId,
      },
    });
  }

  public async createHotel(createHotelDto: CreateHotelDto) {
    const existingChatroom = await this.prisma.hotel.findFirst({
      where: {
        hotelName: createHotelDto.hotelName,
      },
    });

    if (existingChatroom) {
      throw new BadRequestException({ name: 'Hotel already exists' });
    }

    return this.prisma.hotel.create({
      data: createHotelDto,
    });
  }

  public async createRoom(createRoomDto: CreateRoomDto) {
    const existingChatroom = await this.prisma.room.findFirst({
      where: {
        roomName: createRoomDto.roomName,
      },
    });

    if (existingChatroom) {
      throw new BadRequestException({ name: 'Room already exists' });
    }

    return this.prisma.room.create({
      data: createRoomDto,
    });
  }

  public async getRooms(pagination: PaginationDtoOutput) {
    return await this.prisma.room.findMany({
      where: pagination.search,
      skip: pagination.page_number,
      take: pagination.page_size,
    });
  }

  public async getCategories() {
    return await this.prisma.category.findMany({});
  }

  public async getHotels() {
    return await this.prisma.hotel.findMany({
      include: {
        rooms: true,
      },
    });
  }
  public async getHotelById(id: number) {
    const foundHotel = await this.prisma.hotel.findUnique({
      where: {
        id,
      },
      include: {
        rooms: {
          include: { roomType: true, roomReserves: true },
        },
      },
    });
    if (!foundHotel) throw new NotFoundException('Hotel Not Found!');
    return foundHotel;
  }

  public async reservations(reservationsDto: ReservationsDto) {
    const existRoom = await this.prisma.room.findUnique({
      where: {
        id: reservationsDto.roomId,
      },
      include: {
        roomType: true,
      },
    });

    if (!existRoom) throw new NotFoundException('Room not found!');

    const existingGuest = await this.prisma.guest.findUnique({
      where: {
        userId: reservationsDto.userId,
      },
      include: {
        user: true,
      },
    });

    if (!existingGuest) throw new NotFoundException('Guest not found!');

    const reservations = await this.prisma.reservation.create({
      data: {
        startDate: reservationsDto.startDate,
        endDate: reservationsDto.endDate,
        discountPercent: reservationsDto.discountPercent,
        totalPrice: existRoom.currentPrice,
        ts_created: new Date(),
        ts_updated: new Date(),
        guestId: existingGuest.id,
      },
    });

    const provisionalReservationStatus =
      await this.prisma.reservationStatusCatalog.findFirst({
        where: {
          statusName: ReservationStatus.Provisional,
        },
      });
    const reservationStatusEvent =
      await this.prisma.reservationStatusEvent.create({
        data: {
          details: 'Provisional',
          ts_created: new Date(),
          reservationId: reservations.id,
          reservationStatusCatalogId: provisionalReservationStatus.id,
        },
      });

    const roomReserved = await this.prisma.roomReserved.create({
      data: {
        reservationId: reservations.id,
        roomId: reservationsDto.roomId,
        price: `${
          (+reservations.totalPrice * +reservationsDto.discountPercent) / 100
        }`,
      },
    });

    const chanel = await this.prisma.chanel.findFirst({
      where: {
        chanelName: 'AirBnb',
      },
    });

    const syncronization = await this.prisma.syncronization.create({
      data: {
        messageSent: 'Reservation room success',
        messageReceived: 'Reservation room success',
        reservationId: reservations.id,
        chanelId: chanel.id,
        ts: new Date(),
      },
    });

    const chanelUsed = await this.prisma.chanelUsed.create({
      data: {
        roomId: reservationsDto.roomId,
        chanelId: chanel.id,
      },
    });

    const response: ReservationType = {
      checkin_date: reservations.startDate,
      checkout_date: reservations.endDate,
      room_type: existRoom.roomType.typeName,
      guest_name: existingGuest.user.fullname,
      guest_email: existingGuest.user.email,
      additional_requests: '',
    };

    return response;
  }
}
