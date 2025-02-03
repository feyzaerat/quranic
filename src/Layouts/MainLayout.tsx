import React from 'react'
import Router from '../Routers/Router'
import { Navbar } from '../Components'

type Props = {}

const MainLayout = (props: Props) => {
  return (
    <>
    <Navbar/>
    <Router />
    </>
  )
}

export default MainLayout