
import { PageDiv } from './App';

import styled from 'styled-components';

var Latex = require('react-latex');

const education = [
{
  degree: 'PhD (Mathematics)',
  start: { year: 2022, month: 9, day: 1 },
  end: { year: 2025, month: 7, day: 1 },
  institution: 'University of Saskatchewan',
  supervisor: 'Dr. Steven Rayan',
  thesis: 'Moduli Stacks and Homotopy Theory (tentative)',
  completed: false,
},
{
  degree: 'MSc (Mathematics)',
  start: { year: 2021, month: 9, day: 1 },
  end: { year: 2022, month: 8, day: 1 },
  institution: 'University of Toronto',
  supervisor: 'Dr. Alexander Kupers',
  thesis: 'Semidirect Products of $\\infty$--Operads',
  completed: true,
},
{
  degree: 'BSc (Mathematics and Computer Science)',
  start: { year: 2016, month: 1, day: 1 },
  end: { year: 2021, month: 7, day: 1 },
  institution: 'University of Saskatchewan',
  supervisor: 'Dr. Steven Rayan',
  thesis: 'Quantum Information through Topological Quantum Field Theories',
  completed: true,
},
];

const invitedTalks = [
{
  title: 'TQFTs and Quantum Computing',
  event: 'quanTA Junion Symposium',
  date: { year: 2023, month: 6, day: 29 },
  location: 'University of Saskatchewan'
},
{
  title: 'TQFTs and Quantum Computing',
  event: 'Scientific Session on Quantum Information Theory, CMS Summer Meeting',
  date: { year: 2023, month: 6, day: 3 },
  location: 'University of Ottawa'
},
{
  title: 'TQFTs through Parallel Transport and Quantum Computing',
  event: 'The Calgary Peripatetic Seminar',
  date: { year: 2021, month: 9, day: 24 },
  location: 'University of Calgary'
},
];

const awards = [
{
  name: 'Canada Graduate Scholarship --- Doctoral',
  authority: 'NSERC',
  institution: 'University of Saskatchewan',
  currency: 'CA$',
  value: '105,000 for 3 years',
  period: {
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
    description: 'Academic year 2020 --- 2021'
  }
},
{
  name: 'Most Outstanding Graduate in Mathematics',
  institution: 'University of Saskatchewan',
  period: {
    description: 2021
  }
},
{
  name: 'Best Thesis Prize in Mathematics',
  institution: 'University of Saskatchewan',
  period: {
    description: 2021
  }
},
{
  name: 'Haslam Medal',
  description: 'for most outstanding graduate in College of Arts and Science',
  institution: 'University of Saskatchewan',
  period: {
    description: 2021
  }
},
{
  name: 'Earl of Bessborough Prize',
  description: 'for most outstanding graduate in science',
  institution: 'University of Saskatchewan',
  period: {
    description: 2021
  }
},
{
  name: 'Undergraduate Student Research Award',
  authority: 'NSERC',
  institution: 'University of Saskatchewan',
  currency: 'CA$',
  value: '4,500',
  period: {
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
    start: { year: 2019, month: 8, day: 31 },
    end: { year: 2019, month: 12, day: 31 }
  }
},
{
  name: 'JP Tremblay Award',
  authority: 'Department of Computer Science',
  institution: 'University of Saskatchewan',
  period: {
    description: 'Academic year 2018 --- 2019'
  }
},
{
  name: 'University of Saskatchewan Scholarship',
  institution: 'University of Saskatchewan',
  currency: 'CA$',
  value: '3,000',
  period: {
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
    start: { year: 2017, month: 5, day: 1 },
    end: { year: 2017, month: 8, day: 31 }
  }
},
{
  name: 'JP Tremblay Award',
  authority: 'Department of Computer Science',
  institution: 'University of Saskatchewan',
  period: {
    description: 'Academic year 2016 --- 2017'
  }
},
]

function monthName(monthNum : number) {
  const date = new Date();
  date.setMonth(monthNum - 1);

  return date.toLocaleString('en-US', { month: 'long' })
}

const LayoutSpan = styled.span<{ small: string, align?: string }>`
  @media only screen and (min-width: 768px) {
    display: inline-block;
    width: ${props => props.small};
    text-align: ${props => props.align};
  }
  @media only screen and (max-width: 768px) {
    display: block;
    width:100%;
  }
`;

function CV() {
  return (
  <PageDiv>
  <div style={{ fontWeight: 'bold' }}>Education</div>
  <hr style={{ marginTop: '0%' }} />
  {education.map((ed, index) =>
    <div key={index} style={{ marginTop: '0.5em' }}>
      <LayoutSpan small='70%'>
        <span style={{ fontWeight: 'bold' }}>{ed.degree}</span>
        , <span style={{fontStyle: 'italic'}}>{ed.institution}</span>
      </LayoutSpan>
      <LayoutSpan small='30%' align='end'>
        {monthName(ed.start.month)}, {ed.start.year}
        {' --- '}
        {ed.completed
          ? `${monthName(ed.end.month)}, ${ed.end.year}`
          : ' present'}
      </LayoutSpan> 
      <div>Supervisor: {ed.supervisor}</div>
      <div>Thesis: <Latex>{ed.thesis}</Latex></div>
    </div>
  )}

  <div style={{ fontWeight: 'bold', marginTop: '1.5em' }}>Invited Talks</div>
  <hr style={{ marginTop: '0%' }} />
  {invitedTalks.map((talk, index) =>
    <div key={index} style={{ marginTop: '0.5em' }}>
      <LayoutSpan small='70%' style={{ fontWeight: 'bold' }}>
        {talk.title}
      </LayoutSpan>
      <LayoutSpan small='30%' align='end'>
        {monthName(talk.date.month)} {talk.date.day}, {talk.date.year}
      </LayoutSpan>
      <div>
        <span style={{ fontStyle: 'italic' }}>{talk.event}</span>
        , {talk.location}
      </div>
    </div>
  )}

  <div style={{ fontWeight: 'bold', marginTop: '1.5em' }}>Awards</div>
  <hr style={{ marginTop: '0%' }} />
  {awards.map((award, index) =>
    <div key={index} style={{ marginTop: '0.5em' }}>
      <LayoutSpan small='70%'>
        <span style={{ fontWeight: 'bold' }}>{award.name}</span>
        {award.currency && award.value &&
          <span> ({award.currency} {award.value})</span>}
        {award.description && <span> ({award.description})</span>}
      </LayoutSpan>
      <LayoutSpan small='30%' align='end'>
        {award.period.start &&
          monthName(award.period.start.month) + ', ' + award.period.start.year}
        {award.period.end &&
          ' --- ' + monthName(award.period.end.month) +
          ', ' + award.period.end.year}
        {award.period.term && award.period.year &&
          award.period.term + ', ' + award.period.year}
        {award.period.description && award.period.description}
      </LayoutSpan>
      <div>
        {award.authority &&
        <span>
            Awarded by <span style={{ fontStyle: 'italic' }}>
              {award.authority}
            </span> {' at '}
        </span>}
        <span style={{ fontStyle: 'italic' }}>
          {award.institution}
        </span>
        {award.endNote &&
        <span>
          {', ' + award.endNote}
        </span>}
      </div>
    </div>
  )}
  </PageDiv>
  );
}

export default CV;
