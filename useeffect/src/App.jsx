import { useState } from "react"
import { useEffect } from "react"

function App() {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(10)

   useEffect(function(){
    console.log('UseEffect is running for num')
  }, [num])

  useEffect(function(){
    console.log('UseEffect is running for num2')
  }, [num2])

  return (
    <>
      <h1>num - {num}</h1>    
      <h1>num2 - {num2}</h1>    
      
      <button
      onClick={() => {
        setNum(num + 1)
      }}      
      > num

      </button >

      <button
      onDoubleClick={() => {
        setNum2(num2 + 10)
      }}
      >
        num2
      </button>
    </>
  )
}

export default App
