export function oneWeekAway(date: string) {
  const newDate = new Date(date)
  const inOneWeek = newDate.setDate(newDate.getDate() + 7)
  return new Date(inOneWeek)
}
