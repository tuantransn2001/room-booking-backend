import { reduce as asyncReduce } from 'awaity/esm';
import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  getAllCountryApi,
  getCityByCountry,
} from 'src/lib/apis/country/country';
import { PrismaService } from 'src/prisma.service';
import { randomStringByCharsetAndLength } from 'src/utils/randomString';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}
  async onModuleInit() {
    console.log('test');
    // const countries = await getAllCountryApi();
    // const { countryData, cityData } = await asyncReduce(
    //   Object.values(countries.data)
    //     .map(({ name }) => name)
    //     .slice(0, 5),
    //   async (res, name, index) => {
    //     const cityData = await getCityByCountry(name);
    //     const countryRow = {
    //       id: index + 1,
    //       countryName: name,
    //     };
    //     res.countryData.push(countryRow);
    //     cityData?.data.data.slice(0, 10).forEach((city) => {
    //       const cityRow = {
    //         cityName: city,
    //         postCode: randomStringByCharsetAndLength('numeric', 4, false),
    //         countryId: countryRow.id,
    //       };
    //       res.cityData.push(cityRow);
    //     });
    //     return res;
    //   },
    //   { countryData: [], cityData: [] },
    // );
  }
}
