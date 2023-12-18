
import React from 'react'

import About from './About'
import Contact from './Contact'

import _basicPage from '../Common/BasicPage.module.css'
const {main : basicPage} = _basicPage

function Home() {
  return (
  <div className={basicPage}>
    <About />

    <div className="font-bold pt-4">Contact</div>
    <Contact />
  </div>
  )
}

export default Home
