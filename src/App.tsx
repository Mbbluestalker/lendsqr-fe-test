import { useState } from 'react'
import './App.scss'
import {Routes, Route} from 'react-router-dom'
import { NavBar, SideBar, UserCard, UserDetails } from './components'

function App() {

  return (
    <div className="App">
      <NavBar />
      
      {/* <SideBar /> */}
      <UserCard />
      <UserDetails />
    </div>
  )
}

export default App
