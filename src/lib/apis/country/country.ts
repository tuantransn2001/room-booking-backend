import { apiWithInstance } from '../axios';

const url = {
  country: {
    primary: 'https://api.countrystatecity.in/v1/countries?=',
    secondPrimary: 'https://countryapi.io/api/all',
  },
  city: {
    primary: 'https://countriesnow.space/api/v0.1/countries/cities',
  },
};

export const getAllCountryApi = async () =>
  await apiWithInstance(url.country.primary).get('', {
    headers: {
      ['X-CSCAPI-KEY']:
        'bTFUeUFzaGRJOVJtZ2tGU3p6UGdmTUY3anE4cTI3Uk5uRnJHUzVuaA==',
    },
  });

export const getCityByCountry = async (country: string) =>
  await apiWithInstance(url.city.primary).post('', {
    country: `${country.toLowerCase()}`,
  });
