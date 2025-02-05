import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Surah } from '../Pages'

type Props = {}

const Router = () => {
  return (
    <div className="router-content">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<Home />}/>
      
    </Routes>
    </div>
  )
}

export default Router