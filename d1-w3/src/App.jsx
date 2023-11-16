 import React from 'react'

 const App = () =>
 {
    return (
    <>
        <div className='main'>
            <div className='list'>
                <br/>
                <h1>Todo-List</h1>
                <br/>
                <input type='text' placeholder='Add an Item'/>
                <button> + </button>

                <ol>
                    <li> Apple </li>
                </ol>

            </div>
        </div>
    </>
    );
   
 };
 export default App;