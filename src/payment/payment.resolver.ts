import { UseFilters, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLErrorFilter } from 'src/filters/custom-exception.filter';
import { RegisterCardDetail } from './register.type';
import { PaymentService } from './payment.service';
import { RegisterCardDetailDto } from './dto';
import { GraphqlAuthGuard } from 'src/auth/graphql-auth.guard';

@Resolver()
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => RegisterCardDetail, { name: 'registerCardDetail' })
  public async registerCardDetail(
    @Args('registerCardDetailInput')
    registerCardDetailDto: RegisterCardDetailDto,
  ) {
    return this.paymentService.registerCardDetail(registerCardDetailDto);
  }
}
