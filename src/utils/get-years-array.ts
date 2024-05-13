export const getYearsArray = (startYear: number) => {
  const years = [];
  const endYear = new Date().getFullYear() - 1;
  for (let i = endYear; i > startYear; i--) {
    years.push(i);
  }
  return years;
};
