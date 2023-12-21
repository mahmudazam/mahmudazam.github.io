
function monthName(monthNum) {
  const date = new Date()
  date.setMonth(monthNum - 1)

  return date.toLocaleString('en-US', { month: 'long' })
}
exports.monthName = monthName

const PeriodTag = {
  SE: 'StartEndPeriod',
  DE: 'DescriptionPeriod',
  ON: 'OngoingPeriod',
  SD: 'SingleDatePeriod',
  TY: 'TermYearPeriod',
}
exports.PeriodTag = PeriodTag

function monthYearString(date) {
  return `${monthName(date.month)}, ${date.year}`
}
exports.monthYearString = monthYearString

function simpleDateToString(date) {
  return `${monthName(date.month)} ${date.day}, ${date.year}`
}
exports.simpleDateToString = simpleDateToString

function matchError(a) {
  throw new Error('Period: error in pattern matching')
}

function periodToString(period) {
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
exports.periodToString = periodToString
