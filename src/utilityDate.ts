import jalaliMoment from 'jalali-moment';
import { persianCharToEnglishNumber } from '.';

const jalaliFormat = 'jYYYY/jMM/jDD';

export const dayOfWeekShamsi = (dayOfWeekMiladi: number): number => {
  return dayOfWeekMiladi === 6
    ? 0
    : dayOfWeekMiladi === 0
      ? 1
      : dayOfWeekMiladi === 1
        ? 2
        : dayOfWeekMiladi === 2
          ? 3
          : dayOfWeekMiladi === 3
            ? 4
            : dayOfWeekMiladi === 4
              ? 5
              : dayOfWeekMiladi === 5
                ? 6
                : 7;
}

export const ReturnMiladyDate = (date: string, format = 'jYYYY/jMM/jDD'): string => {
  const m = jalaliMoment(date, format);
  if (m.isValid()) {
    return m.format('YYYY/DD/MM');
  } else {
    return '';
  }
}

/**
 * give year and month after that
 * @return `Fitst day on month` jalali date format `YYYY/MM/DD`
 */
export const ReturnFirstDayOfMonth = (year: number, month: number): string => {
  return jalaliMoment(`${year}/${month}/1`, 'jYYYY/jM/jD').format(
    jalaliFormat
  );

}

/**
 * give year and month after that
 * @return `Fitst day on month` jalali date format `YYYY/MM/DD`
 */
export const ReturnLastPeriod = (year: number): string => {
  return jalaliMoment(`${year}/12/30`, 'jYYYY/jM/jD').format(
    jalaliFormat
  );
}

/**
 * give year and month after that
 * @return `Fitst day on month` jalali date format `YYYY/MM/DD`
 */
export const ReturnFirstPeriod = (year: number): string => {
  return jalaliMoment(`${year}/1/1`, 'jYYYY/jM/jD').format(
    jalaliFormat
  );
}

/**
 * @return `today` jalali date format `YYYY/MM/DD`
 */
export const ReturnToday = (): string => {
  const m = jalaliMoment();
  return m.format(jalaliFormat);
}

/**
 * give date as parametr and validate it
 * @param date "jalali date format 'YYYY/MM/DD'"
 * @return if date data is correct return true else return false
 */
export const isValid = (date: string): boolean => {
  const m = jalaliMoment(date, jalaliFormat);

  return m.isValid();
}

/**
 * @return `Previous Day By Current Day` jalali date format `YYYY/MM/DD`
 */
export const ReturnPreviousDay = (value: string): string => {
  const m = jalaliMoment(value, jalaliFormat);
  if (m.isValid()) {
    return m.subtract(1, 'day').format(jalaliFormat);
  } else {
    return jalaliMoment().subtract(1, 'day').format(jalaliFormat);
  }
}

/**
 * @return `Next Day By Current Day` jalali date format `YYYY/MM/DD`
 */
export const ReturnNextDay = (value: string): string => {
  const m = jalaliMoment(value, jalaliFormat);
  if (m.isValid()) {
    return m.add(1, 'day').format(jalaliFormat);
  } else {
    return jalaliMoment().add(1, 'day').format(jalaliFormat);
  }
}

/**
 * @return `Previous Week By Current Day` jalali date format `YYYY/MM/DD`
 */
export const ReturnPreviousWeek = (value: string): string => {
  const m = jalaliMoment(value, jalaliFormat);
  if (m.isValid()) {
    return m.subtract(7, 'day').format(jalaliFormat);
  } else {
    return jalaliMoment().subtract(7, 'day').format(jalaliFormat);
  }
}

/**
 * @return `Next Week By Current Day` jalali date format `YYYY/MM/DD`
 */
export const ReturnNextWeek = (value: string): string => {
  const m = jalaliMoment(value, jalaliFormat);
  if (m.isValid()) {
    return m.add(7, 'day').format(jalaliFormat);
  } else {
    return jalaliMoment().add(7, 'day').format(jalaliFormat);
  }
}

/**
 * @return `Previous Month By Current Day` jalali date format `YYYY/MM/DD`
 */
export const ReturnPreviousMonth = (value: string): string => {
  const m = jalaliMoment(value, jalaliFormat);
  if (m.isValid()) {
    return m.subtract(1, 'month').format(jalaliFormat);
  } else {
    return jalaliMoment().subtract(1, 'month').format(jalaliFormat);
  }
}

/**
 * @return `Next Month By Current Day` jalali date format `YYYY/MM/DD`
 */
export const ReturnNextMonth = (value: string): string => {
  const m = jalaliMoment(value, jalaliFormat);
  if (m.isValid()) {
    return m.add(1, 'month').format(jalaliFormat);
  } else {
    return jalaliMoment().add(1, 'month').format(jalaliFormat);
  }
}

/**
 * @return `Previous Season By Current Day` jalali date format `YYYY/MM/DD`
 */
export const ReturnPreviousSeason = (value: string): string => {
  const m = jalaliMoment(value, jalaliFormat);
  if (m.isValid()) {
    return m.subtract(3, 'month').format(jalaliFormat);
  } else {
    return jalaliMoment().subtract(3, 'month').format(jalaliFormat);
  }
}

/**
 * @return `Next Season By Current Day` jalali date format `YYYY/MM/DD`
 */
export const ReturnNextSeason = (value: string): string => {
  const m = jalaliMoment(value, jalaliFormat);
  if (m.isValid()) {
    return m.add(3, 'month').format(jalaliFormat);
  } else {
    return jalaliMoment().add(3, 'month').format(jalaliFormat);
  }
}

/**
 * @return `Previous Year By Current Day` jalali date format `YYYY/MM/DD`
 */
export const ReturnPreviousYear = (value: string): string => {
  const m = jalaliMoment(value, jalaliFormat);
  if (m.isValid()) {
    return m.subtract(1, 'year').format(jalaliFormat);
  } else {
    return jalaliMoment().subtract(1, 'year').format(jalaliFormat);
  }
}

/**
 * @return `Next Year By Current Day` jalali date format `YYYY/MM/DD`
 */
export const ReturnNextYear = (value: string): string => {
  const m = jalaliMoment(value, jalaliFormat);
  if (m.isValid()) {
    return m.add(1, 'year').format(jalaliFormat);
  } else {
    return jalaliMoment().add(1, 'year').format(jalaliFormat);
  }
}

/**
 * @return `Previous Year By Current Day` jalali date format `YYYY/MM/DD`
 */
export const ReturnPrevious4Year = (value: string): string => {
  const m = jalaliMoment(value, jalaliFormat);
  if (m.isValid()) {
    return m.subtract(4, 'year').format(jalaliFormat);
  } else {
    return jalaliMoment().subtract(4, 'year').format(jalaliFormat);
  }
}

/**
 * @return `Next Year By Current Day` jalali date format `YYYY/MM/DD`
 */
export const ReturnNext4Year = (value: string): string => {
  const m = jalaliMoment(value, jalaliFormat);
  if (m.isValid()) {
    return m.add(4, 'year').format(jalaliFormat);
  } else {
    return jalaliMoment().add(4, 'year').format(jalaliFormat);
  }
}

/**
 * @return `Previous 10 Year By Current Day` jalali date format `YYYY/MM/DD`
 */
export const ReturnPrevious10Year = (value: string): string => {
  const m = jalaliMoment(value, jalaliFormat);
  if (m.isValid()) {
    return m.subtract(10, 'year').format(jalaliFormat);
  } else {
    return jalaliMoment().subtract(10, 'year').format(jalaliFormat);
  }
}

/**
 * @return `Next 10 Year By Current Day` jalali date format `YYYY/MM/DD`
 */
export const ReturnNext10Year = (value: string): string => {
  const m = jalaliMoment(value, jalaliFormat);
  if (m.isValid()) {
    return m.add(10, 'year').format(jalaliFormat);
  } else {
    return jalaliMoment().add(10, 'year').format(jalaliFormat);
  }
}
/**
 * @return `[year, month, day]` after split date
 * if value is the correcte date, this method return data of value
 * else this method return current date data
 */
export const ReturnCurrentDateValue = (value: string): [number, number, number] => {
  const m = jalaliMoment(value, jalaliFormat);
  if (m.isValid()) {
    return value.split('/').map((i) => +i) as any;
  } else {
    return jalaliMoment()
      .format(jalaliFormat)
      .split('/')
      .map((i) => +i) as any;
  }
}

export const ReturnNameMonth = (month: number | string): string => {
  switch (month) {
    case 1:
      return 'فروردین';
    case '1':
      return 'فروردین';
    case '01':
      return 'فروردین';
    case 2:
      return 'اردیبهشت';
    case '2':
      return 'اردیبهشت';
    case '02':
      return 'اردیبهشت';
    case 3:
      return 'خرداد';
    case '3':
      return 'خرداد';
    case '03':
      return 'خرداد';
    case 4:
      return 'تیر';
    case '4':
      return 'تیر';
    case '04':
      return 'تیر';
    case 5:
      return 'مرداد';
    case '5':
      return 'مرداد';
    case '05':
      return 'مرداد';
    case 6:
      return 'شهریور';
    case '6':
      return 'شهریور';
    case '06':
      return 'شهریور';
    case 7:
      return 'مهر';
    case '7':
      return 'مهر';
    case '07':
      return 'مهر';
    case 8:
      return 'آبان';
    case '8':
      return 'آبان';
    case '08':
      return 'آبان';
    case 9:
      return 'آذر';
    case '9':
      return 'آذر';
    case '09':
      return 'آذر';
    case 10:
      return 'دی';
    case '10':
      return 'دی';
    case 11:
      return 'بهمن';
    case '11':
      return 'بهمن';
    case 12:
      return 'اسفند';
    case '12':
      return 'اسفند';
    default:
      return 'نامشخص';
  }
}

/**
 * 
 * @param e value that it can contain ۱ or 1
 * @returns {string} that evry ۱ convert to 1 ۲, ۲ convert to 2 and so on and other chars are filter
 */
export const normalizeDateString = (
  e: string,
): string => {
  const match = e.match(/^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|31|([1-2][0-9])|(0[1-9]))))$/g) || [];
  const result = match.map((e) =>
    castChars(e).toString()
  );
  return result.join('');
}



export const onChangeInputDateBoxShamsiHandleValue = (e: string, value: string) => {
  e = e.split('').map(i => castChars(i)).join('');
  if (e.length === 1) {
    const match = e.match(/[1-4]/g) || value.split('');
    return match.join('');
  } else if (e.length === 2) {
    const match = e.match(/[1-4][0-4]/g) || value.split('');
    return match.join('');
  } else if (e.length === 3) {
    const match = e.match(/[1-4][0-4]\d/g) || value.split('');
    return match.join('');
  } else if (e.length === 4) {
    const match = e.match(/[1-4][0-4]\d\d/g) || value.split('');
    return match.join('');
  } else if (e.length === 5) {
    const match = e.match(/[1-4][0-4]\d\d(\/|-)/g) || value.split('');
    return match.join('');
  } else if (e.length === 6) {
    const match = e.match(/[1-4][0-4]\d\d\/[0-1]/g) || value.split('');
    return match.join('');
  } else if (e.length === 7) {
    const sixth = +(e.substring(5, 6));
    if (sixth === 1) {
      const match = e.match(/[1-4][0-4]\d\d\/[1][0-2]/g) || value.split('');
      return match.join('');
    } else {
      const match = e.match(/[1-4][0-4]\d\d\/[0][1-9]/g) || value.split('');
      return match.join('');
    }
  } else if (e.length === 8) {
    const match = e.match(/[1-4][0-4]\d\d\/[0-1][0-9]\//g) || value.split('');
    return match.join('');
  } else if (e.length === 9) {
    const match = e.match(/[1-4][0-4]\d\d\/[0-1][0-9]\/[0-3]/g) || value.split('');
    return match.join('');
  } else if (e.length === 10) {
    const eighth = +(e.substring(8, 9));
    if (eighth === 0) {
      const match = e.match(/[1-4][0-4]\d\d\/[0-1][0-9]\/[0][1-9]/g) || value.split('');
      return match.join('');
    } else if (eighth === 1) {
      const match = e.match(/[1-4][0-4]\d\d\/[0-1][0-9]\/[1][0-9]/g) || value.split('');
      return match.join('');
    } else if (eighth === 2) {
      const match = e.match(/[1-4][0-4]\d\d\/[0-1][0-9]\/[2][0-9]/g) || value.split('');
      return match.join('');
    } else if (eighth === 3) {
      const sixth = +(e.substring(6, 7));
      if ([1, 2, 3, 4, 5, 6].includes(sixth)) {
        const match = e.match(/[1-4][0-4]\d\d\/[0-1][0-9]\/[3][0-1]/g) || value.split('');
        return match.join('');
      } else {
        const match = e.match(/[1-4][0-4]\d\d\/[0-1][0-9]\/[3][0]/g) || value.split('');
        return match.join('');
      }

    }
  }
  return e;
}


const castChars = (e: string): string => {
  switch (e) {
    case '1':
    case '۱':
      return '1';
    case '2':
    case '۲':
      return '2';
    case '3':
    case '۳':
      return '3';
    case '4':
    case '۴':
      return '4';
    case '5':
    case '۵':
      return '5';
    case '6':
    case '۶':
      return '6';
    case '7':
    case '۷':
      return '7';
    case '8':
    case '۸':
      return '8';
    case '9':
    case '۹':
      return '9';
    case '0':
    case '۰':
      return '0';
    default:
      return '/';
  }
}