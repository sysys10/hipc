import { format } from 'date-fns'

function formatDate(date: string) {
  if (date.length <= 10) {
    date = date.replace(/\./g, '-')
  }
  return format(new Date(date), 'yyyy.MM.dd')
}

export { formatDate }
