export const getYearsArray = (startYear: number) => {
  const years = [];
  const endYear = new Date().getFullYear();
  for (let i = endYear; i > startYear; i--) {
    years.push(i);
  }
  return years;
};
