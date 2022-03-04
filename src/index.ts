import { Num2persian } from './num2persian';
import { formatNumber } from './utilityNumbers';

export { Num2persian, persianCharToEnglishNumber, persianStringToEnglishString, formatNumberShowZero } from './num2persian';

export {
    ReturnCurrentDateValue,
    ReturnFirstDayOfMonth,
    ReturnFirstPeriod,
    ReturnLastPeriod,
    ReturnMiladyDate,
    ReturnNameMonth,
    ReturnNext10Year,
    ReturnNext4Year,
    ReturnNextDay,
    ReturnNextMonth,
    ReturnNextSeason,
    ReturnNextWeek,
    ReturnNextYear,
    ReturnPrevious10Year,
    ReturnPrevious4Year,
    ReturnPreviousDay,
    ReturnPreviousMonth,
    ReturnPreviousSeason,
    ReturnPreviousWeek,
    ReturnPreviousYear,
    ReturnToday,
    dayOfWeekShamsi,
    onChangeInputDateBoxShamsiHandleValue,
    isValid,
} from './utilityDate';

export * from './utilityKeys';


declare global {
    interface Number {
        format(persianNumberic?: true): string;
    }
    interface Number {
        formatPersian(): string;
    }
    interface Number {
        digitToAlpha(): string;
    }

    interface String {
        englishToPersian(): string;
    }
}



// eslint-disable-next-line
Number.prototype.format = function (persianNumberic?: true) {
    return formatNumber(this as number, persianNumberic);
}

// eslint-disable-next-line
Number.prototype.formatPersian = function () {
    return formatNumber(this as number, true);
}

// eslint-disable-next-line
Number.prototype.digitToAlpha = function () {
    return Num2persian(this);
}

// eslint-disable-next-line
String.prototype.englishToPersian = function () {
    return formatNumber(this as string);
}