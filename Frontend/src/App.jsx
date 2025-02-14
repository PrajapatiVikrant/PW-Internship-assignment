import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router'
import Home from './Pages/CustomerPages/Home'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' Component={Home}/>
    </Routes>
       
    </>
  )
}

export default App
