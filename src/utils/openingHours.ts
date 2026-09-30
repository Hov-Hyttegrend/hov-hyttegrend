const openingHoursDateFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Oslo',
  month: '2-digit',
  day: '2-digit',
});

// The schedule repeats every year, with both ends of each period included.
export function getOpeningHours(date = new Date()): string | null {
  const parts = openingHoursDateFormatter.formatToParts(date);
  const month = Number(parts.find((part) => part.type === 'month')?.value);
  const day = Number(parts.find((part) => part.type === 'day')?.value);
  const monthDay = month * 100 + day;

  if (monthDay >= 701 && monthDay <= 815) {
    return '09.00 - 14.00 / 18.00 - 20.00';
  }

  if ((monthDay >= 501 && monthDay <= 630) || (monthDay >= 816 && monthDay <= 930)) {
    return '09.00 - 11.00 / 18.30 - 20.00';
  }

  return null;
}
