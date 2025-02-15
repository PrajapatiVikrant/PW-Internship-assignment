import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router'
import Home from './Pages/CustomerPages/Home'
import CustomerSection from './Pages/CustomerPages/CustomerSection'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/*' Component={CustomerSection}/>
    </Routes>
       
    </>
  )
}

export default App
