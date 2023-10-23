import { Module } from '@nestjs/common';
import { StripeService } from './lib/stripe/striple.service';
import { PaymentService } from './payment.service';
import { PaymentResolver } from './payment.resolver';

@Module({
  providers: [StripeService, PaymentService, PaymentResolver],
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
