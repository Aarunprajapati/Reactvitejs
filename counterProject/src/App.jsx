import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(8);

  const addvalue = () =>{
    if(count<20){
      setCount(count+1)
    }else{
      setCount(20)
    }
  }
  const removevalue= () =>{
    if(count>0){
      setCount(count-1);
    }
    else{
      setCount(0);
    }
  }
  return (
    <>
    <h1>Pani or Code</h1>
    <h3>Counter Value:- {count}</h3>
    <button onClick={addvalue}>Add Value</button>
    <button onClick={removevalue}>remove Value</button>
    </>
  )
}

export default App
