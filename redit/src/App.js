import React from 'react'
import './App.css'
import MainSection from './Components/MainSection'
import Header from './Components/Header'

const App = () => {
  return (
    <div className='APP'>
      <div className='Navbar'>
      <Header/>
      </div>
     
      <div className='Hero'>
      <MainSection/>
      </div>
      
    </div>
  )
}

export default App
