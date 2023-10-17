import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import CustomLayout from './layout'
import ProviderPattern from './provider_pattern'
import LandingPage from './landing_page'

function App() {

  return (
    <>
      <Routes>
        <Route element={<CustomLayout />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='pattern/provider' element={<ProviderPattern />} />
        </Route>
      </Routes>
      </>
  )
}

export default App
