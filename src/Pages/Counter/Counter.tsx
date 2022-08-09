import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    const incremant = () =>{
        setCount((prevCounter) => prevCounter+5)
    }
    const decremant = () =>{
        setCount((prevCounter) => prevCounter-1)
    }
  return (
    <div>
        <h1 data-testid="counters">{count}</h1>
        <button data-testid="increment" onClick={incremant}>Increment</button>
        <button data-testid="decrement" onClick={decremant}>Decrement</button>
    </div>
  )
}

export default Counter