import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { PaginationDto } from '../dto/paginationDto';

export const GetPagination = createParamDecorator(
  (data, ctx: ExecutionContext): PaginationDto => {
    const args = ctx.getArgByIndex(1);
    const paginationParams: PaginationDto = {
      page_number: 0,
      page_size: 10,
      // sort: [],
      // search: [],
    };

    const _limit = args.paginationInput.page_size;
    const _skip = (args.paginationInput.page_number - 1) * _limit;

    paginationParams.page_number = parseInt(_skip.toString());
    paginationParams.page_size = parseInt(_limit.toString());

    //  create array of sort
    // if (args.paginationInput.sort) {
    //   const sortArray = args.paginationInput.sort.toString().split(',');
    //   paginationParams.sort = sortArray.map((sortItem) => {
    //     const sortBy = sortItem[0];
    //     switch (sortBy) {
    //       case '-':
    //         return {
    //           field: sortItem.slice(1),
    //           by: 'ASC',
    //         };
    //       case '+':
    //         return {
    //           field: sortItem.slice(1),
    //           by: 'ASC',
    //         };
    //       default:
    //         return {
    //           field: sortItem.trim(),
    //           by: 'DESC',
    //         };
    //     }
    //   });
    // }

    // create array of search
    // if (args.paginationInput.search) {
    //   const searchArray = args.paginationInput.search.toString().split(',');
    //   paginationParams.search = searchArray.map((searchItem) => {
    //     const field = searchItem.split(':')[0];
    //     const value = searchItem.split(':')[1];
    //     return {
    //       field,
    //       value,
    //     };
    //   });
    // }
    return paginationParams;
  },
);
