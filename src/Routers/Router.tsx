import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages'

type Props = {}

const Router = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<Home />}/>
    </Routes>
  )
}

export default Router