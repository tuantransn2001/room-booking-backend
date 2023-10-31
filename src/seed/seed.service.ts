import { each as asyncForEach } from 'awaity/esm';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserRole } from 'src/user/enum';
import { randomStringByCharsetAndLength } from 'src/utils/randomString';
@Injectable()
export class SeedService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}
  async onModuleInit() {
    // on init

    function randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const roles = {
      [0]: 'ADMIN',
      [1]: 'GUEST',
      [2]: 'MANAGER',
      [3]: 'STAFF',
    };

    const users = await this.prisma.user.findMany();

    const guests = await this.prisma.guest.findMany();

    const rooms = await this.prisma.room.findMany();

    const channels = await this.prisma.chanel.findMany();

    const userType = UserRole;

    console.log(Object.values(UserRole), roles[1]);

    await asyncForEach(rooms, async (room) => {
      const randomInt = randomInteger(0, 2);

      // const randomName = randomStringByCharsetAndLength()

      const newUser = {
        fullname: '',
        avatarUrl: '',
        email: '',
        emailVerifiedAt: '',
        password: '',
        userType: '',
        rememberToken: '',
        isActive: '',
        createdAt: '',
        updatedAt: '',
      };
    });
  }
}
