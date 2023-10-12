import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { HotelResolver } from './hotel.resolver';
import { HotelService } from './hotel.service';

@Module({
  providers: [HotelService, HotelResolver, PrismaService, JwtService],
})
export class HotelModule {}
