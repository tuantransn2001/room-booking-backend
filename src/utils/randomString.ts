import * as randomstring from 'randomstring';

export const randomStringByCharsetAndLength = (
  charset: string,
  length: number,
  isUppercase: boolean,
): string => {
  return randomstring.generate({
    charset: charset,
    length: length,
    capitalization: isUppercase ? 'uppercase' : 'lowercase',
  });
};
