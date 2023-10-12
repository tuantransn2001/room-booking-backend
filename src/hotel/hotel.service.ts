import { BadRequestException, Injectable } from '@nestjs/common';
import { PaginationDto } from 'src/common/dto/paginationDto';
import { PrismaService } from 'src/prisma.service';
import { CreateHotelDto, CreateRoomDto } from './dto';

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

  public async getRooms(pagination: PaginationDto) {
    return await this.prisma.room.findMany({
      include: {
        hotel: true,
      },
      skip: pagination.page_number,
      take: pagination.page_size,
    });
  }

  public async getRoomTypes(pagination: PaginationDto) {
    return await this.prisma.roomType.findMany({
      skip: pagination.page_number,
      take: pagination.page_size,
    });
  }
}
