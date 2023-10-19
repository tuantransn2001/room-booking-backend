import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class SeedService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}
  async onModuleInit() {
    // On Init
    // await this.prisma.reservation.deleteMany();
    // await this.prisma.reservationStatusEvent.deleteMany();
    // await this.prisma.roomReserved.deleteMany();
    // await this.prisma.syncronization.deleteMany();
    // await this.prisma.chanelUsed.deleteMany();
  }
}
