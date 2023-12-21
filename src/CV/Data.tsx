
import { Period, SingleDatePeriod } from './CVDate'

const data = require('./data.js')

interface EducationEntry {
  degree: string,
  period: Period,
  institution: string,
  supervisor: string,
  thesis: string,
  completed: boolean
}

interface Talk {
  title: string,
  event: string,
  date: SingleDatePeriod,
  location: string
}

interface Award {
  name: string,
  description?: string,
  authority?: string,
  institution?: string,
  currency?: string,
  value?: string,
  period: Period,
  endNote?: string,
}

interface Work {
  position: string,
  description?: string,
  institution: string,
  period: Period,
  endNote?: string,
}

interface Activity {
  activity: string,
  where?: string,
  period: Period,
  description?: number | string,
}

export const education : Array<EducationEntry> = data.education

export const talks : Array<Talk> = data.talks

export const awards : Array<Award> = data.awards

export const work : Array<Work> = data.work

export const activities : Array<Activity> = data.activities

