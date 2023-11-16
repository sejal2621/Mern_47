import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const students = ['Sejal', 'Sunaina', 'Aradhna', 'Mujeeba'];
  students.map((item)=>{
    document.write(item);
  })
  
  return (
      <h1>Map Practice!</h1>
    )
}

export default App;
