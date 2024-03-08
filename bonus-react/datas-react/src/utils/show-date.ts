export function showDate(dateString: string, days: number, months: number, years: number) {
  const dateToShow = new Date(dateString)

  if (!dateString || !dateToShow.getTime()) return ''

  dateToShow.setUTCHours(3)

  if (days) dateToShow.setDate(dateToShow.getDate() + days)
  if (months) dateToShow.setMonth(dateToShow.getMonth() + months)
  if (days) dateToShow.setFullYear(dateToShow.getFullYear() + years)

  return dateToShow.toLocaleDateString()
 }
