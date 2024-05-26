import { ko } from 'date-fns/locale'
import { format, formatDistanceToNowStrict } from 'date-fns'

export const getYearMonthDay = (date: Date | string) => {
  return format(new Date(date), 'yyyy년 LL월 dd일')
}

export const getDistanceFromToday = (date: Date | string) => {
  return formatDistanceToNowStrict(new Date(date), { locale: ko, addSuffix: true })
}
