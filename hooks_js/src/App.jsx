import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }



  const [user, setUser] = useState({user: "Swapna", age: 22})

  const userfun = () => {
    const newUser = {...user};
    newUser.user = "Iti"
    newUser.age = 23
    const xyz = setUser(newUser)
    console.log(xyz)
  }


  return (
    <>
    <div>
      <h1>Value of count is {count}</h1>
      <div className="inner">
        <button onClick={increase}>Click here</button>
        <button onClick={decrease}>Click here</button>
      </div>
    </div>

    <button onClick={userfun}>Click here</button>
    </>
  );
}

export default App;
