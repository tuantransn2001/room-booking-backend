import Stripe from 'stripe';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { RegisterCardDetailDto } from 'src/payment/dto';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/user/user.type';

@Injectable()
export class StripeService {
  constructor(private readonly configService: ConfigService) {}
  public async register(registerCardDetailDto: RegisterCardDetailDto) {
    const appVersion = this.configService.get('APP_VERSION');
    const apiKey = this.configService.get('STRIPE_API_KEY');

    const stripe = new Stripe(apiKey, {
      apiVersion: appVersion,
    });

    const params: Stripe.CustomerCreateParams = registerCardDetailDto;
    const customer: Stripe.Customer = await stripe.customers.create(params);

    return customer;
  }
}
