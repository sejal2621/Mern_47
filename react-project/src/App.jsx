  import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState()
  const [date, setDate] = useState(new Date())
  const [history, setHistory] = useState([]);
  // useEffect(()=>{
  // })

  return (
    <div className="App">
      <div>
        {history.map(function(historyItem){
          return ( 
            <div key={historyItem}>
              <span className='time'>
                {historyItem.date.getHours()},
                {historyItem.getMinutes()},
                {historyItem.date.getSeconds()},
              </span>
              <span style={{
                margin: "100px", backgroundColor: "lightblue"
                }}> {historyItem.count}
            </span>
        
      {/* {JSON.stringify(history)} */}
    </div>
    );
  })}
</div>
<button
  onClick={function(){
    setNumber(number + 1);
    const oldHistory = [...history];
    oldHistory.push({date: new Date(), count: number });
    setHistory(oldHistory);
  }}
  style={{ fontSize: "500px"}}
  >
    {number}
</button>
</div>    );

}
