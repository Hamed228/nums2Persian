export const isDownTheseKeys = (
  e: React.KeyboardEvent,
  shiftKey?: boolean,
  ctrlKey?: boolean,
  altKey?: boolean
) => {
  const isShiftKey =
    shiftKey === undefined
      ? true
      : shiftKey === null
        ? true
        : shiftKey && e.shiftKey
          ? true
          : !shiftKey && !e.shiftKey
            ? true
            : false;

  const isCtrlKey =
    ctrlKey === undefined
      ? true
      : ctrlKey === null
        ? true
        : ctrlKey && e.ctrlKey
          ? true
          : !ctrlKey && !e.ctrlKey
            ? true
            : false;

  const isAltKey =
    altKey === undefined
      ? true
      : altKey === null
        ? true
        : altKey && e.altKey
          ? true
          : !altKey && !e.altKey
            ? true
            : false;

  return isShiftKey && isCtrlKey && isAltKey;
}

export const isReletedKey = (e: React.KeyboardEvent) => {
  if (e.key.toUpperCase() === 'TAB') {
    return false;
  } else if (
    (e.shiftKey || e.altKey || e.ctrlKey) &&
    ['SHIFT', 'ALT', 'CONTROL', ''].includes(e.key.toUpperCase())
  ) {
    return false;
  } else {
    return true;
  }
}

export const isNumeralKey = (e: React.KeyboardEvent) => {
  return '1234567890'.includes(e.key);
}
export const isNumeralKeyBoth = (e: React.KeyboardEvent) => {
  return '1234567890۱۲۳۴۵۶۷۸۹۰'.includes(e.key);
}

export const userNameKey = (e: string): string => {
  const match = e.match(/[a-zA-Z0-9@._]/g) || [];
  return match.join('');
}
export const websiteKey = (e: string): string => {
  const match = e.match(/[a-zA-Z0-9:/._]/g) || [];
  return match.join('');
}
export const PhoneNumberKey = (e: string): string => {
  const match = e.match(/[0-9]/g) || [];
  return match.join('');
}
export const MobileNumberKey = (e: string): string => {
  const match = e.match(/[0-9]/g) || [];
  return match.join('');
}



// export const persianStringToEnglishString = (
//   e: string,
//   cantUseZero?: boolean
// ): string {
//   const match = e.match(cantUseZero ? /[/1-9/۱-۹]/g : /[/0-9/۰-۹]/g) || [];
//   const result = match.map((e) =>
//     persianCharToEnglishNumber(e).toString()
//   );
//   return result.join('');
// }

export const englishStringNumberToPersianString = (
  e: string,
): string => {
  if (typeof e === 'undefined') {
    return '';
  } else if (e === null) {
    return '';
  }
  const result = e.toString().split('').map((e) =>
    englishCharToPershianNumber(e).toString()
  );
  return result.join('');
}

export const englishCharToPershianNumber = (e: string): string => {
  switch (e) {
    case '1':
      return '۱';
    case '2':
      return '۲';
    case '3':
      return '۳';
    case '4':
      return '۴';
    case '5':
      return '۵';
    case '6':
      return '۶';
    case '7':
      return '۷';
    case '8':
      return '۸';
    case '9':
      return '۹';
    case '0':
      return '۰';
    default:
      return e;
  }
}


export const isShiftKey = (e: React.KeyboardEvent<any>) => {
  if (
    e.shiftKey && !e.altKey && !e.ctrlKey
  ) {
    e.preventDefault();
    e.stopPropagation();
    return true;
  } else {
    return false;
  }
}
export const isAltKey = (e: React.KeyboardEvent<any>) => {
  if (
    e.altKey && !e.shiftKey && !e.ctrlKey
  ) {
    e.preventDefault();
    e.stopPropagation();
    return true;
  } else {
    return false;
  }
}
export const isAlphabetKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (
    e.key &&
    e.key.length === 1 &&
    !isNumeralKey(e) &&
    isDownTheseKeys(e, e.shiftKey, false, false)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isAlphabetKeyBoth = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (
    e.key &&
    e.key.length === 1 &&
    !isNumeralKeyBoth(e) &&
    isDownTheseKeys(e, e.shiftKey, false, false)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isEscapeKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean,
  disablePreventDefult?: true,
) => {
  if (
    e.key.toUpperCase() === 'Escape'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    if (!disablePreventDefult) {
      e.preventDefault();
    } return true;
  } else {
    return false;
  }
}
export const isEnterKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean,
  disablePreventDefult?: true,
) => {
  if (
    e.key.toUpperCase() === 'Enter'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    if (!disablePreventDefult) {
      e.preventDefault();
    }
    return true;
  } else {
    return false;
  }
}
export const isSpaceKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key === ' ' && isDownTheseKeys(e, shift, ctrl, alt)) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isBackspaceKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean,
  disablePreventDefult?: true,
) => {
  if (
    e.code.toUpperCase() === 'Backspace'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    if (!disablePreventDefult) {
      e.preventDefault();
    }
    return true;
  } else {
    return false;
  }
}

export const isDeleteKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.code.toUpperCase() === 'Delete'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isArrowUpKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'arrowUp'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isArrowDownKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'arrowDown'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isPageUpKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'pageUp'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isPageDownKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'pageDown'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isArrowLeftKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'arrowLeft'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isArrowRightKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'arrowRight'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isF1Key = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'F1'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isF2Key = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'F2'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isF3Key = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'F3'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isF4Key = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'F4'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isF5Key = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'F5'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isF6Key = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'F6'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isF7Key = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'F7'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isF8Key = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'F8'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isF9Key = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'F9'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isF11Key = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'F11'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isF10Key = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'F10'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isF12Key = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (
    e.key.toUpperCase() === 'F12'.toUpperCase() &&
    isDownTheseKeys(e, shift, ctrl, alt)
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isTabKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean,
  disablePreventDefult?: true,
) => {
  if (
    e.key &&
    isDownTheseKeys(e, shift, ctrl, alt) &&
    e.key.toUpperCase() === 'tab'.toUpperCase()
  ) {
    if (!disablePreventDefult) {
      e.preventDefault();
    }
    return true;
  } else {
    return false;
  }
}

export const isDotKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.key === '.') {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isAsteriskKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.key === '*') {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isPlusKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.key === '+') {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isEqualKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) &&
    e.code.toLowerCase() === 'Equal'.toLowerCase()
  ) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isAKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 65) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isBKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 66) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isCKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 67) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isDKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 68) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isEKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 69) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isFKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 70) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isGKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 71) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isHKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 72) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isIKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 73) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isJKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 74) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isKKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 75) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isLKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 76) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isMKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 77) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isNKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 78) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isOKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 79) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isPKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 80) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isQKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 81) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isRKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 82) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isSKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 83) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isTKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 84) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isUKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 85) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isVKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 86) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isWKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 87) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isXKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 88) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isYKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 89) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
export const isZKey = (
  e: React.KeyboardEvent,
  shift?: boolean,
  ctrl?: boolean,
  alt?: boolean
) => {
  if (e.key && isDownTheseKeys(e, shift, ctrl, alt) && e.keyCode === 90) {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}

export const isAcceptingKeyF2AndEnter = (e: React.KeyboardEvent) => {
  return isF2Key(e, false, false, false) || isEnterKey(e, false, false, false);
}
export const isAcceptingKey = (e: React.KeyboardEvent) => {
  return isF2Key(e, false, false, false) || isSKey(e, false, true, false);
}
export const isNewingKey = (e: React.KeyboardEvent) => {
  return isF3Key(e, false, false, false) || isNKey(e, false, true, false);
}
export const isViewingKey = (e: React.KeyboardEvent) => {
  return isF4Key(e, false, false, false) || isOKey(e, false, true, false);
}
export const isEditingKey = (e: React.KeyboardEvent) => {
  return isF4Key(e, false, false, false) || isEKey(e, false, true, false);
}
export const isDeletingRowKey = (e: React.KeyboardEvent) => {
  return isF8Key(e, false, false, false) ||
    isLKey(e, false, false, true) ||
    isDeleteKey(e, false, false, true) ||
    isBackspaceKey(e, false, false, true)
    ;
}
export const isDeletingCellKey = (e: React.KeyboardEvent) => {
  return isLKey(e, false, true, false) ||
    isDeleteKey(e, false, true, false) ||
    isBackspaceKey(e, false, true, false)
    ;
}
export const isPrintingKey = (e: React.KeyboardEvent) => {
  return isF9Key(e, false, false, false) || isPKey(e, false, true, false);
}
export const isShowHistoryKey = (e: React.KeyboardEvent) => {
  return isSpaceKey(e, false, true, false) || isArrowDownKey(e, false, true, false);
}




