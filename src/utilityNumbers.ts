import { englishStringNumberToPersianString } from "./utilityKeys";

export const formatNumber = (num: number | string, convertToPersian?: true): string => {
  if (typeof num === 'number') {
    return formatNumberShowZero(num, convertToPersian);
  } else if (!num) {
    return '';
  } else if (typeof num === 'string') {
    return englishStringNumberToPersianString(num);
  } else {
    return '';
  }
};
export const formatNumberShowZero = (num: number | null, convertToPersian?: true): string => {
  if (typeof num === 'number') {
    const result = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    if (convertToPersian) {
      return englishStringNumberToPersianString(result);
    }
    return result;
  }
  return '';
};

export const currencyFormat = (num: number): string => {
  if (!num) {
    return '';
  }
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const currencyFormatDE = (num: number): string => {
  if (!num) {
    return '';
  }
  return (
    num
      .toFixed(2) // always two decimal digits
      .replace('.', ',') // replace decimal point character with ,
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' €'
  );
};

export const sum = <T>(array: T[], key: keyof T): number => {
  if (array && array.length > 0 && typeof array[0][key] === 'number') {
    const result = array.reduce((a, b) => a + ((b[key] as any) || 0), 0);
    return result;
  }
  return 0;
};

export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
