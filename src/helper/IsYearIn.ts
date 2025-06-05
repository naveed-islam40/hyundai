export function isYearInRange(yearPart: string, selectedYear: number): boolean {
  const rangeMatch = yearPart.match(/^(\d{4})-(\d{2}|\d{4})$/);

  if (rangeMatch) {
    const startYear = parseInt(rangeMatch[1], 10);
    const endYearRaw = rangeMatch[2];
    const endYear = endYearRaw.length === 2 
      ? parseInt(String(startYear).slice(0, 2) + endYearRaw, 10)
      : parseInt(endYearRaw, 10);
    return selectedYear >= startYear && selectedYear <= endYear;
  }

  const singleYear = parseInt(yearPart, 10);
  return selectedYear === singleYear;
}
