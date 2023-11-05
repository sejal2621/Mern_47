import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[name, setName]=useState("");
  const[list, setList]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name)
    const date={name}
    if(name)
    {
      setList((ls)=>[...ls,date])
      setName("")
    }
  }

  return (
      <div className='App'>
        <form onSubmit={handleSubmit}>
          <h3>Add Names and Display on Screen</h3>
          <label>Name: </label>
          <input name='name' placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)}/>
          <button>Add</button>
          <button onClick={()=>{
            setList([])
          }}>Reset</button>
        </form>

        {
          list.map((a)=><div>
            <li>{a.name}</li>
          </div>)
        }
      </div>
  )
}

export default App;
