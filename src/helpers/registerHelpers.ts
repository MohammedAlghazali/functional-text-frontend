export const capitalizeFirstCharacter = (text: String) => {
  if (!text) return;
  const capitalizeWord = text;
  return capitalizeWord.charAt(0).toUpperCase() + capitalizeWord.slice(1);
};

export const clearPhoneNumberFormatting = (phoneNumber: String) => {
  const phoneNumberWithoutString = phoneNumber.replace(/\D/g, '');
  const formattedPhoneNumber = phoneNumberWithoutString.replace(/[() -]\D/g, '');
  return formattedPhoneNumber;
};

export const formatPhoneNumber = (phoneNumber: String) => {
  if (phoneNumber) {
    const formattedPhoneNumber = `(${phoneNumber?.substring(
      0,
      3,
    )}${phoneNumber.length >= 3 ? ')' : ''} ${phoneNumber?.substring(3, 6)}${phoneNumber.length >= 6 ? '-' : ''}${phoneNumber?.substring(6, 10)}`;
    return formattedPhoneNumber;
  }
  return '';
};
