import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class SeedService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}
  async onModuleInit() {
    // on init
    // const randomIntFromInterval = (min: number, max: number) => {
    //   return Math.floor(Math.random() * (max - min + 1) + min);
    // };
    // const roomNames = [
    //   'Common Space',
    //   'Luxury',
    //   'Economy',
    //   'Extra Bed',
    //   'Single Bed',
    //   'Double Bed',
    // ];
    // // const cities = await this.prisma.city.findMany();
    // // const categories = await this.prisma.category.findMany();
    // // const roomTypes = await this.prisma.roomType.findMany();
    // const hotels = [];
    // const rooms = [];
    // for (let i = 1; i <= 10001; i++) {
    //   const hotel = {
    //     id: i,
    //     hotelName: `Hotel ${i}`,
    //     description: `Warn,cozy room in a heart of city ${
    //       cities[randomIntFromInterval(0, cities.length - 1)].cityName
    //     }`,
    //     isActive: randomIntFromInterval(0, 100) % 2 === 0 ? true : false,
    //     categoryId:
    //       categories[randomIntFromInterval(0, categories.length - 1)].id,
    //     cityId: cities[randomIntFromInterval(0, cities.length - 1)].id,
    //   };
    //   // await this.prisma.hotel.create({ data: hotel });
    //   const roomAmount = randomIntFromInterval(1, 5);
    //   for (let i = 1; i <= roomAmount; i++) {
    //     const room = {
    //       roomName: roomNames[i],
    //       description:
    //         'Comfortable in ' +
    //         cities[randomIntFromInterval(0, cities.length - 1)].cityName +
    //         'with our system',
    //       hotelId: hotel.id,
    //       currentPrice: `${i * 100}`,
    //       roomTypeId:
    //         roomTypes[randomIntFromInterval(0, roomTypes.length - 1)].id,
    //     };
    //     // await this.prisma.room.create({ data: room });
    //   }
    // }
  }
}
