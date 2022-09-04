export const generateDueDateDate = (date: Date) => {

  const year = date.getFullYear();
  const day = date.getDate();
  const yearFinal = year === new Date().getFullYear() ? '' : `, ${year}`;
  const monthFinal = date.toLocaleString([], { month: 'short' });
  const dayFinal = ` ${day}`;

  return `${monthFinal}${dayFinal}${yearFinal}`;
}

export const generateDateDescription = (date: Date) => {
  const dateAsNum = Date.parse(date.toString());
  const dayDiff = Math.floor((dateAsNum - Date.parse(new Date().toString())) / 86400000);
  return dayDiff < -1 ? `(${dayDiff * -1} days ago)`
    : dayDiff === -1 ? '(Yesterday)'
      : dayDiff === 0 ? '(Today)'
        : dayDiff === 1 ? '(Tomorrow)'
          : dayDiff > 1 ? `(in ${dayDiff} days)` : '';
}