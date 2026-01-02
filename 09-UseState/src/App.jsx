import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num+1)
  }
  function decreaseNum() {
    setNum(num-1)
  }
  function increase5Num() {
    setNum(num+5)
  }
  function decrease5Num() {
    setNum(num-5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button id='one' onClick={increaseNum}>increase</button>
      <button id='one' onClick={decreaseNum}>decrease</button><br />
      <button onClick={increase5Num}>Increase by 5</button>
      <button onClick={decrease5Num}>Decrease by 5</button>
    </div>
  )
}

export default App