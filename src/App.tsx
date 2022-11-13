import { useState } from 'react'
import './App.scss'
import {Routes, Route} from 'react-router-dom'
import { NavBar, SideBar, UserCard } from './components'

function App() {

  return (
    <div className="App">
      <NavBar />
      {/* <UserCard /> */}
      <SideBar />
    </div>
  )
}

export default App
