
const cv_date = require('./cv_date.js')

exports.education = [
{
  degree: 'PhD (Mathematics)',
  period: {
    tag: cv_date.PeriodTag.ON,
    start: { year: 2022, month: 9, day: 1 },
    expected: { year: 2025, month: 7, day: 1 },
  },
  institution: 'University of Saskatchewan',
  supervisor: 'Dr. Steven Rayan',
  thesis: 'Moduli Stacks, Homotopy Theory, and QFTs (tentative)',
  completed: false,
},
{
  degree: 'MSc (Mathematics)',
  period: {
    tag: cv_date.PeriodTag.SE,
    start: { year: 2021, month: 9, day: 1 },
    end: { year: 2022, month: 8, day: 1 },
  },
  institution: 'University of Toronto',
  supervisor: 'Dr. Alexander Kupers',
  thesis: 'Semidirect Products of $\\infty$--Operads',
  completed: true,
},
{
  degree: 'BSc (Mathematics and Computer Science)',
  period: {
    tag: cv_date.PeriodTag.SE,
    start: { year: 2016, month: 1, day: 1 },
    end: { year: 2021, month: 7, day: 1 },
  },
  institution: 'University of Saskatchewan',
  supervisor: 'Dr. Steven Rayan',
  thesis: 'Quantum Information through Topological Quantum Field Theories',
  completed: true,
},
]

exports.talks = [
{
  title: 'Functorial QFT from First Principles',
  event: 'Mathematics Graduate Student Seminar on QFT',
  date: {
    tag: cv_date.PeriodTag.SD,
    date: { year: 2024, month: 2, day: 2 }
  },
  location: 'University of Saskatchewan'
},
{
  title: 'TQFTs and Quantum Computing',
  event: 'quanTA Junior Symposium',
  date: {
    tag: cv_date.PeriodTag.SD,
    date: { year: 2023, month: 6, day: 29 }
  },
  location: 'University of Saskatchewan'
},
{
  title: 'TQFTs and Quantum Computing',
  event: 'Scientific Session on Quantum Information Theory, CMS Summer Meeting',
  date: {
    tag: cv_date.PeriodTag.SD,
    date: { year: 2023, month: 6, day: 3 },
  },
  location: 'University of Ottawa'
},
{
  title: 'TQFTs through Parallel Transport and Quantum Computing',
  event: 'The Calgary Peripatetic Seminar',
  date: {
    tag: cv_date.PeriodTag.SD,
    date: { year: 2021, month: 9, day: 24 },
  },
  location: 'University of Calgary'
},
]

exports.awards = [
{
  name: 'Canada Graduate Scholarship --- Doctoral',
  authority: 'NSERC',
  institution: 'University of Saskatchewan',
  currency: 'CA$',
  value: '105,000 for 3 years',
  period: {
    tag: cv_date.PeriodTag.SE,
    start: { year: 2023, month: 9, day: 1 },
    end: { year: 2026, month: 8, day: 31 }
  }
},
{
  name: 'Dean\'s Scholarship',
  institution: 'University of Saskatchewan',
  currency: 'CA$',
  value: '66,000 for 3 years',
  period: {
    tag: cv_date.PeriodTag.SE,
    start: { year: 2022, month: 9, day: 1 },
    end: { year: 2023, month: 8, day: 31 }
  },
  endNote: 'switched to NSERC CGS D after first year'
},
{
  name: 'Ontario Graduate Scholarship',
  authority: 'Government of Ontario',
  institution: 'University of Toronto',
  currency: 'CA$',
  value: '15,000',
  period: {
    tag: cv_date.PeriodTag.SE,
    start: { year: 2021, month: 9, day: 1 },
    end: { year: 2022, month: 8, day: 31 }
  }
},
{
  name: 'George FD Duff Graduate Fellowship in Mathematics',
  institution: 'University of Toronto',
  currency: 'CA$',
  value: '1,500',
  period: {
    tag: cv_date.PeriodTag.TY,
    term: 'Fall',
    year: 2021
  }
},
{
  name: 'Undergraduate Student Research Award',
  authority: 'NSERC',
  institution: 'University of Saskatchewan',
  currency: 'CA$',
  value: '6,000',
  period: {
    tag: cv_date.PeriodTag.SE,
    start: { year: 2021, month: 5, day: 1 },
    end: { year: 2021, month: 8, day: 31 }
  }
},
{
  name: 'Arts & Science Undergraduate Student Award',
  institution: 'University of Saskatchewan',
  currency: 'CA$',
  value: '1,000',
  period: {
    tag: cv_date.PeriodTag.DE,
    description: 'Academic year 2020 --- 2021'
  }
},
{
  name: 'Most Outstanding Graduate in Mathematics',
  institution: 'University of Saskatchewan',
  period: {
    tag: cv_date.PeriodTag.DE,
    description: '2021'
  }
},
{
  name: 'Best Thesis Prize in Mathematics',
  institution: 'University of Saskatchewan',
  period: {
    tag: cv_date.PeriodTag.DE,
    description: '2021'
  }
},
{
  name: 'Haslam Medal',
  description: 'for most outstanding graduate in College of Arts and Science',
  institution: 'University of Saskatchewan',
  period: {
    tag: cv_date.PeriodTag.DE,
    description: '2021'
  }
},
{
  name: 'Earl of Bessborough Prize',
  description: 'for most outstanding graduate in science',
  institution: 'University of Saskatchewan',
  period: {
    tag: cv_date.PeriodTag.DE,
    description: '2021'
  }
},
{
  name: 'Undergraduate Student Research Award',
  authority: 'NSERC',
  institution: 'University of Saskatchewan',
  currency: 'CA$',
  value: '4,500',
  period: {
    tag: cv_date.PeriodTag.SE,
    start: { year: 2020, month: 5, day: 1 },
    end: { year: 2020, month: 8, day: 31 }
  }
},
{
  name: 'JS & JSG Middleton Scholarship',
  institution: 'University of Saskatchewan',
  currency: 'CA$',
  value: '3,000',
  period: {
    tag: cv_date.PeriodTag.SE,
    start: { year: 2019, month: 8, day: 31 },
    end: { year: 2019, month: 12, day: 31 }
  }
},
{
  name: 'JP Tremblay Award',
  authority: 'Department of Computer Science',
  institution: 'University of Saskatchewan',
  period: {
    tag: cv_date.PeriodTag.DE,
    description: 'Academic year 2018 --- 2019'
  }
},
{
  name: 'University of Saskatchewan Scholarship',
  institution: 'University of Saskatchewan',
  currency: 'CA$',
  value: '3,000',
  period: {
    tag: cv_date.PeriodTag.SE,
    start: { year: 2017, month: 12, day: 31 },
    end: { year: 2018, month: 4, day: 31 }
  }
},
{
  name: 'Shell Canada Scholarship',
  institution: 'University of Saskatchewan',
  currency: 'CA$',
  value: '2,750',
  period: {
    tag: cv_date.PeriodTag.SE,
    start: { year: 2017, month: 9, day: 1 },
    end: { year: 2017, month: 12, day: 31 }
  }
},
{
  name: 'Undergraduate Student Research Award',
  authority: 'NSERC',
  institution: 'University of Saskatchewan',
  currency: 'CA$',
  value: '4,500',
  period: {
    tag: cv_date.PeriodTag.SE,
    start: { year: 2017, month: 5, day: 1 },
    end: { year: 2017, month: 8, day: 31 }
  }
},
{
  name: 'JP Tremblay Award',
  authority: 'Department of Computer Science',
  institution: 'University of Saskatchewan',
  period: {
    tag: cv_date.PeriodTag.DE,
    description: 'Academic year 2016 --- 2017'
  }
},
]

exports.work = [
{
  position: 'Teaching Assistant',
  description: 'MAT 137: Calculus with Proofs',
  institution: 'University of Toronto',
  period: {
    tag: cv_date.PeriodTag.SE,
    start: { year: 2021, month: 9, day: 1 },
    end: { year: 2022, month: 4, day: 31 },
  },
},
{
  position: 'Marker',
  description: 'MATH 266: Linear Algebra I',
  institution: 'University of Saskatchewan',
  period: {
    tag: cv_date.PeriodTag.TY,
    term: 'Winter',
    year: 2021,
  },
},
{
  position: 'Marker',
  description: 'MATH 163: Introduction to Mathematical Reasoning',
  institution: 'University of Saskatchewan',
  period: {
    tag: cv_date.PeriodTag.TY,
    term: 'Fall',
    year: 2020,
  },
},
{
  position: 'Software Developer Intern',
  institution: 'Vecima Networks',
  period: {
    tag: cv_date.PeriodTag.SE,
    start: { year: 2018, month: 5, day: -1 },
    end: { year: 2019, month: 8, day: -1 },
  },
  endNote: 'USask Computer Science Internship Program'
},
]

exports.activities = [
{
  activity: 'Vice President Finance',
  where: `Mathematics and Statistics Student Society,
          University of Saskatchewan`,
  period: {
    tag: cv_date.PeriodTag.SE,
    start: { year: 2020, month: 9, day: 1 },
    end: { year: 2021, month: 4, day: 31 },
  },
},
{
  activity: 'USask Programming Contests',
  period: {
    tag: cv_date.PeriodTag.DE,
    description: 'Participate regularly'
  },
  description: `Our team achieved first place in Winter, 2023 (open category),
                and Winter, 2020`
},
]

