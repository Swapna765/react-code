import { useState } from "react";

function App() {

const [weight, setWeight] = useState(0)
const [height, setHeight] = useState(0)
const [bmi, setBmi] = useState(0)
const [message, setMessage] = useState(0)


let calBmi = (e) => {
  e.preventDefault();
  if(weight===0 || height===0) {
    alert("Please enter a valid weight and height")
  }
  else{
    let bmi = (weight/(height*height)*703)
    setBmi(bmi.toFixed(1))


    if(bmi < 25){
      setMessage("You are Underweight")
    }

    else if(bmi >= 25 && bmi < 30){
      setMessage("You have a Healthy weight")
    }

    else{
      setMessage("You are Overweight")
    }
  }
}



let reload = () => {
  window.location.reload()
}


  return (
    <div className="App">
      <div className="container">
        <h2>BMI calculator</h2>

        <form onSubmit={calBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter Weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (in)</label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
