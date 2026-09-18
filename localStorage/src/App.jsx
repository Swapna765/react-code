
function App() {

  localStorage.clear()
  localStorage.setItem('User', 'Swapna')
  const user = localStorage.getItem('User')
  localStorage.setItem('Age', 22)
  const age = localStorage.getItem('Age')

  console.log(user, age)

  const data = {
    userName : "swapna",
    age : 22
  }

  const info = localStorage.setItem('data', JSON.stringify(data)) // localstarage always store the data in the string format not in object or other
  const information = JSON.parse(info) // It convert the string in to object format
  console.log(information)

  return (
   <><h1>Output is in the console</h1></>
  )
}

export default App
