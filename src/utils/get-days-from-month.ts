export const getDaysFromMonth = (year: number, month: number) => {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    days[1] = 29;
  }
  return Array.from({ length: days[month] }, (_, k) => k + 1).map((day) =>
    day.toString()
  );
};
