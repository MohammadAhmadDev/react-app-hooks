import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0);
  // const maxLimit = 50;
  const minLimit = 0;
  // let counter =25;

  const addValue=()=>{
    if(counter < 20){
      setCount (counter + 1);
    }
    else{
      console.log("clicked Max limit reached" , counter);
    }
  }

  const removeValue=()=>{
    if(counter > minLimit){
      setCount (counter - 1);
    }else{
      console.log("clicked max limit reached" , counter);
    }
  }

  return (
    <>
      <h1>Code For React useState hooks</h1>
      <h3>Code For Count Value: {counter}</h3>
      <button
      onClick={addValue}
      >Add Value: {counter}</button>
      <br />
      <button 
      onClick={removeValue}
      >Remove Value: {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
