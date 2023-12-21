
import React from 'react'
import { Link } from 'react-router-dom'

import About from './About'
import Contact from './Contact'

import _basicPage from '../Common/BasicPage.module.css'
const {main : basicPage} = _basicPage

function Home() {
  return (
  <div className={basicPage}>
    <About />

    <div className="font-bold pt-4">Publications</div>
    <Link to="publications">Click here</Link>

    <div className="font-bold pt-4">CV</div>
    <Link to="cv">Web</Link> | <a href="/MahmudAzam.pdf">PDF</a>

    <div className="font-bold pt-4">Contact</div>
    <Contact />
  </div>
  )
}

export default Home
