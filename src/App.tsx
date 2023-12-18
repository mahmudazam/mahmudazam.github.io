
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { useMedia, useNavState } from './state'
import Header from './Header/Header'
import { appRoutes } from './structure'

import styles from './App.module.css'

function App() {

  // Store Media queries as global state:
  const { setMd, setMaxMd } = useMedia(state => state)
  const [_md, _setMd] = useState(
    window.matchMedia('(min-width: 768px)').matches
  )
  const [_maxMd, _setMaxMd] = useState(
    window.matchMedia('(max-width: 768px)').matches
  )

  // The local state variables are needed to avoid some sort of race condition
  // Not sure why this problem happens
  useEffect(() => {
    window.matchMedia('(min-width: 768px)')
          .addEventListener('change', e => _setMd(e.matches))
    window.matchMedia('(max-width: 768px)')
          .addEventListener('change', e => _setMaxMd(e.matches))
  })
  useEffect(() => {
    setMd(_md)
    setMaxMd(_maxMd)
  }, [_md, _maxMd, setMd, setMaxMd])

  const collapseNavNow = useNavState(state => state.collapseNavNow)

  return (
    <div className={styles['top']}>
      <Header />
      <div className="p-0 m-0 min-w-full min-h-[100vh]"
           onClick={collapseNavNow}>
        <Routes>
        {appRoutes.map((rt, index) =>
          <Route key={index} path={rt.path} element={<rt.component />} />
        )}
        </Routes>
      </div>
    </div>
  )
}

export default App
