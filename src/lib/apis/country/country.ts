import { apiWithInstance } from '../axios';

export const getAllCountryApi = async () =>
  await apiWithInstance(`https://countryapi.io/api/`).get('all');

export const getCityByCountry = async (country: string) =>
  await apiWithInstance(`https://countriesnow.space/api/v0.1`).post(
    '/countries/cities',
    {
      country: `${country.toLowerCase()}`,
    },
  );
