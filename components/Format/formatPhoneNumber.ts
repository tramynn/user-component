export function formatPhoneNumber(phoneNumberString: string) {
  var phoneNumberLength = phoneNumberString.length;
  if (isNaN(parseInt(phoneNumberString))) {
    throw new Error('Please enter in numbers only');
  } else if (phoneNumberLength !== 10) {
    throw new Error('Please enter a 10-digit phone number');
  }

  var match = phoneNumberString.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
}
