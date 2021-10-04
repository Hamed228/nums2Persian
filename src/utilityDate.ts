import jalaliMoment from 'jalali-moment';

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
export const ReturnCurrentDateValue = (value: string): number[] => {
  const m = jalaliMoment(value, jalaliFormat);
  if (m.isValid()) {
    return value.split('/').map((i) => +i);
  } else {
    return jalaliMoment()
      .format(jalaliFormat)
      .split('/')
      .map((i) => +i);
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
