import axios from 'axios'
import { useState } from 'react'
function App() {

  const [data, setData] = useState()

  const getData = async () =>{
    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response)
    setData(response.data)
  }

  return (
    <>
    <button onClick={getData}>Click</button>
    <div>
      {data.map(function(e, idx){
        return <h3>{e.author} {idx}</h3>
      })}
    </div>
    </>
  )
}

export default App
