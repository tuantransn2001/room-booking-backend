import { Injectable, NotFoundException } from '@nestjs/common';
import { RegisterCardDetailDto } from './dto';
import { StripeService } from './lib/stripe/striple.service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PaymentService {
  constructor(
    private readonly stripeService: StripeService,
    private readonly prismaService: PrismaService,
  ) {}

  public async registerCardDetail(
    registerCardDetailDto: RegisterCardDetailDto,
  ) {
    const existUser = await this.prismaService.user.findUnique({
      where: {
        id: registerCardDetailDto.userId,
      },
    });

    if (!existUser) throw new NotFoundException('User not found!');
    delete registerCardDetailDto.userId;
    const customer = await this.stripeService.register(registerCardDetailDto);

    return customer;
  }
}
