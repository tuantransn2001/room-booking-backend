import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { PaginationDtoOutput } from '../dto/output/paginationDto';
import { URLSearchParam } from 'src/utils/urlSearchParam';

export const GetPagination = createParamDecorator(
  (data, ctx: ExecutionContext): PaginationDtoOutput => {
    const args = ctx.getArgByIndex(1);
    const paginationParams: PaginationDtoOutput = {
      page_number: 0,
      page_size: 10,
      search: {},
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

    if (args.paginationInput.search) {
      paginationParams.search = URLSearchParam.urlParamsToObj(
        args.paginationInput.search.toString(),
      );
    }
    return paginationParams;
  },
);
