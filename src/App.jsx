import './App.css'
import { useState } from 'react'
import Header from './components/Header/Header'
import Element from './router/Router'

function App() {
  return (
    <div className="App">
      <Header />
      <Element />
    </div>
  )
}

export default App
