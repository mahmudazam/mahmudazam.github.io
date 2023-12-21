
const cv_date = require('./cv_date.js')

export interface SimpleDate { year : number, month: number, day: number }

export function monthName(monthNum : number) {
  return cv_date.monthName(monthNum)
}

export enum PeriodTag {
  SE = 'StartEndPeriod',
  TY = 'TermYearPeriod',
  DE = 'DescriptionPeriod',
  ON = 'OngoingPeriod',
  SD = 'SingleDatePeriod',
}

export interface StartEndPeriod {
  readonly tag: PeriodTag.SE, start: SimpleDate, end: SimpleDate
}
export interface TermYearPeriod {
  readonly tag: PeriodTag.TY, term: string, year: number
}
export interface DescriptionPeriod {
  readonly tag: PeriodTag.DE, description: string
}
export interface OngoingPeriod {
  readonly tag: PeriodTag.ON, start: SimpleDate, expected?: SimpleDate
}
export interface SingleDatePeriod {
  readonly tag: PeriodTag.SD, date: SimpleDate
}

export type Period = StartEndPeriod
            | TermYearPeriod
            | DescriptionPeriod
            | OngoingPeriod
            | SingleDatePeriod

export function monthYearString(date: SimpleDate) : string {
  return cv_date.monthYearString(date)
}

export function simpleDateToString(date: SimpleDate) : string {
  return cv_date.simpleDateToString(date)
}

function matchError(a : never) : never {
  throw new Error('Period: error in pattern matching')
}

export function periodToString(period : Period) : any {
  switch(period.tag) {
  case PeriodTag.SE:
   return `${monthYearString(period.start)} --- ${monthYearString(period.end)}`
  case PeriodTag.TY:
   return `${period.term}, ${period.year}`
  case PeriodTag.DE:
   return period.description
  case PeriodTag.ON:
    return monthYearString(period.start) + ' --- present'
  case PeriodTag.SD:
    return simpleDateToString(period.date)
  default:
    return matchError(period)
  }
}
