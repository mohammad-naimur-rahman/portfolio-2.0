export function formateDate(timestamp: number): string {
  const date = new Date(timestamp)

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }

  const dateFormatter = new Intl.DateTimeFormat('en-US', options)
  return dateFormatter.format(date)
}
