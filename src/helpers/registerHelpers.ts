export const capitalizeFirstCharacter = (text: String) => {
  if (!text) return;
  const capitalizeWord = text;
  return capitalizeWord.charAt(0).toUpperCase() + capitalizeWord.slice(1);
};

export const unCapitalizeFirstCharacter = (text: String) => {
  if (!text) return;
  const capitalizeWord = text;
  return capitalizeWord.charAt(0).toLowerCase() + capitalizeWord.slice(1);
};

export const formatPhoneNumber = (phoneNumber: String) => {
  const isMatch = phoneNumber.trim().match(/^(\d{3})(\d{0,3})(\d{0,4})$/);

  if (isMatch) {
    const formattedPhoneNumber = `(${isMatch[1]}) ${isMatch[2] ? `${isMatch[2]}-` : ''}${isMatch[3]}`;
    return formattedPhoneNumber;
  }
  return phoneNumber;
};
