/**
 *
 * @type {string}
 */
const delimiter: string = ' و ';

/**
 *
 * @type {string}
 */
const zero: string = 'صفر';

/**
 *
 * @type {string}
 */
const negative: string = 'منفی ';

/**
 *
 * @type {*[]}
 */
const letters: any[] = [
  ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'],
  ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده', 'بیست'],
  ['', '', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'],
  ['', 'یکصد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'],
  ['', ' هزار', ' میلیون', ' میلیارد', ' بیلیون', ' بیلیارد', ' تریلیون', ' تریلیارد',
    ' کوآدریلیون', ' کادریلیارد', ' کوینتیلیون', ' کوانتینیارد', ' سکستیلیون', ' سکستیلیارد', ' سپتیلیون',
    ' سپتیلیارد', ' اکتیلیون', ' اکتیلیارد', ' نانیلیون', ' نانیلیارد', ' دسیلیون', ' دسیلیارد'
  ],
];

/**
 * Decimal suffixes for decimal part
 * @type {string[]}
 */
const decimalSuffixes: string[] = [
  '',
  'دهم',
  'صدم',
  'هزارم',
  'ده‌هزارم',
  'صد‌هزارم',
  'میلیونوم',
  'ده‌میلیونوم',
  'صدمیلیونوم',
  'میلیاردم',
  'ده‌میلیاردم',
  'صد‌‌میلیاردم'
];

/**
 * Clear number and split to 3 sections
 * @param {*} num
 */
const prepareNumber = (num: any): string[] => {
  let out = num;
  if (typeof out === 'number') {
    out = out.toString();
  }

  //make first part 3 chars
  if (out.length % 3 === 1) {
    out = `00${out}`;
  } else if (out.length % 3 === 2) {
    out = `0${out}`;
  }
  // Explode to array
  return out.replace(/\d{3}(?=\d)/g, '$&*').split('*');
};

//tinyNumToWord convert 3tiny parts to word
const tinyNumToWord = (num: string): string => {
  // return zero
  if (parseInt(num, 0) === 0) {
    return '';
  }
  const parsedInt = parseInt(num, 0);
  if (parsedInt < 10) {
    return letters[0][parsedInt];
  }
  if (parsedInt <= 20) {
    return letters[1][parsedInt - 10];
  }
  if (parsedInt < 100) {
    const one = parsedInt % 10;
    const ten = (parsedInt - one) / 10;
    if (one > 0) {
      return letters[2][ten] + delimiter + letters[0][one];
    }
    return letters[2][ten];
  }
  const one = parsedInt % 10;
  const hundreds = (parsedInt - (parsedInt % 100)) / 100;
  const ten = (parsedInt - ((hundreds * 100) + one)) / 10;
  const out = [letters[3][hundreds]];
  const secondPart = ((ten * 10) + one);

  if (secondPart === 0) {
    return out.join(delimiter);
  }

  if (secondPart < 10) {
    out.push(letters[0][secondPart]);
  } else if (secondPart <= 20) {
    out.push(letters[1][secondPart - 10]);
  } else {
    out.push(letters[2][ten]);
    if (one > 0) {
      out.push(letters[0][one]);
    }
  }

  return out.join(delimiter);
};


/**
 * Convert Decimal part
 * @param decimalPart
 * @returns {string}
 * @constructor
 */
const convertDecimalPart = (decimalPart: string): string => {
  // Clear right zero
  decimalPart = decimalPart.replace(/0*$/, "");

  if (decimalPart === '') {
    return '';
  }

  if (decimalPart.length > 11) {
    decimalPart = decimalPart.substr(0, 11);
  }
  return ' ممیز ' + Num2persian(decimalPart) + ' ' + decimalSuffixes[decimalPart.length];
};

/**
 * Main function
 * @param input
 * @returns {string}
 * @constructor
 */
export const Num2persian = (input: any): string => {
  // Clear Non digits
  input = input.toString().replace(/[^0-9.-]/g, '');
  let isNegative = false;
  const floatParse = parseFloat(input);
  // return zero if this isn't a valid number
  if (isNaN(floatParse)) {
    return zero;
  }
  // check for zero
  if (floatParse === 0) {
    return zero;
  }
  // set negative flag:true if the number is less than 0
  if (floatParse < 0) {
    isNegative = true;
    input = input.replace(/-/g, '');
  }

  // Declare Parts
  let decimalPart = '';
  let integerPart = input;
  let pointIndex = input.indexOf('.');
  // Check for float numbers form string and split Int/Dec
  if (pointIndex > -1) {
    integerPart = input.substring(0, pointIndex);
    decimalPart = input.substring(pointIndex + 1, input.length);
  }

  if (integerPart.length > 66) {
    return 'خارج از محدوده';
  }

  // Split to sections
  const slicedNumber = prepareNumber(integerPart);
  // Fetch Sections and convert
  const out = [];
  for (let i = 0; i < slicedNumber.length; i += 1) {
    const converted = tinyNumToWord(slicedNumber[i]);
    if (converted !== '') {
      out.push(converted + letters[4][slicedNumber.length - (i + 1)]);
    }
  }

  // Convert Decimal part
  if (decimalPart.length > 0) {
    decimalPart = convertDecimalPart(decimalPart);
  }

  return (isNegative ? negative : '') + out.join(delimiter) + decimalPart;
};

/**
 * replace ۱ by 1 and ۲ by 2 and....۹ by 9
 * @param e its length equl 1 and contain one of ۰|۱|۲|۳|۴|۵|۶|۷|۸|۸|۹
 * @returns 0|1|2|3|4|5|6|7|8|9
 */
export const persianCharToEnglishNumber = (e: string): number => {
  switch (e) {
    case '1':
    case '۱':
      return 1;
    case '2':
    case '۲':
      return 2;
    case '3':
    case '۳':
      return 3;
    case '4':
    case '۴':
      return 4;
    case '5':
    case '۵':
      return 5;
    case '6':
    case '۶':
      return 6;
    case '7':
    case '۷':
      return 7;
    case '8':
    case '۸':
      return 8;
    case '9':
    case '۹':
      return 9;
    default:
      return 0;
  }
}

/**
 * 
 * @param e value that it can contain ۱ or 1
 * @param cantUseZero @param e can use ۰ or 0 ? when it be true it be possible
 * @returns {string} that evry ۱ convert to 1 ۲, ۲ convert to 2 and so on and other chars are filter
 */
export const persianStringToEnglishString = (
  e: string,
  cantUseZero?: boolean
): string => {
  const match = e.match(cantUseZero ? /[/1-9/۱-۹]/g : /[/0-9/۰-۹]/g) || [];
  const result = match.map((e) =>
    persianCharToEnglishNumber(e).toString()
  );
  return result.join('');
}

//@ts-ignore
String.prototype.num2persian = function () {
  return Num2persian(this);
};

//@ts-ignore
Number.prototype.num2persian = function () {
  return Num2persian(parseFloat(this).toString());
};

//@ts-ignore
String.prototype.NumberPersian2English = function () {
  return persianStringToEnglishString(this, true);
};

export const formatNumberShowZero = (num: number | null): string => {
  if (typeof num === 'number') {
    const result = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

    return result;
  }
  return '';
};

//@ts-ignore
Number.prototype.formatNumberShowZero = function () {
  return formatNumberShowZero(this);
};
