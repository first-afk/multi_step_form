import React from 'react'
import Form1 from './pages/Form1'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Form2 from './pages/Form2'
import Form3 from './pages/Form3.jsx'
import Form4 from './pages/Form4.jsx'
import Form5 from './pages/Form5.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Form1 />}></Route>
        <Route path="/select-plan" element={<Form2 />}></Route>
        <Route path="/add-on-monthly" element={<Form3 />}></Route>
        <Route path="/add-on-yearly" element={<Form5 />}></Route>
        <Route path="/summary" element={<Form4 />}></Route>
      </Routes>
    </div>
    
  )
}

export default App