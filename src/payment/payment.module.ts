import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentResolver } from './payment.resolver';
import { PrismaService } from 'src/prisma.service';
import { StripeService } from './lib/stripe/striple.service';

@Module({
  providers: [PrismaService, PaymentService, PaymentResolver, StripeService],
})
export class PaymentModule {}

// ? Check card detail by userid

// ? Save user inf , address

// ----------------------------

// ?  Case do not exist before
// ?  Add card detail

// ----------------------------

// ? Case exit
// ? Add
