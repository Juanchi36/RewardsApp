import { formatPoints } from '@helpers';

describe('timeObjectFromMilliseconds', () => {
  it('should return a formatted number', () => {
    const formattedPoints = formatPoints(54000000);

    expect(formattedPoints).toBeDefined();
    expect(formattedPoints).toBe('54,000,000.00');
  });

  it('should return 0.00 when number is undefined', () => {
    const formattedPoints = formatPoints();

    expect(formattedPoints).toBeDefined();
    expect(formattedPoints).toBe('0.00');
  });

  it('should return a negative number', () => {
    const formattedPoints = formatPoints(-1200);

    expect(formattedPoints).toBeDefined();
    expect(formattedPoints).toBe('-1,200.00');
  });
});
