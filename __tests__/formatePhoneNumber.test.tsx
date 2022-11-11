import { formatPhoneNumber } from '../components/Format/formatPhoneNumber';

describe('formatPhoneNumber test', () => {
  it('should format phone number correctly', () => {
    const result = formatPhoneNumber('5558675309');
    expect(result).toEqual('(555) 867-5309');
  });
});
