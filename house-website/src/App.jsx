import React from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Homepage from './components/HomePage/Homepage'
import Overview from './components/Overview/Overview'
import Gallery from './components/Gallery/Gallery'
import CalendarAvailability from './components/Availability/Availability'
import Rates from './components/Rates/Rates'

const App = () => {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element = {<Homepage />} />
      <Route path='/overview' element = {<Overview />} />
      <Route path='/gallery' element = {<Gallery />} />
      <Route path='/availability' element = {<CalendarAvailability />} />
      <Route path='/rates' element = {<Rates />} />
    </Routes>
    </Router>
    </>
  )
}
export default App
