function App() {

  function btn() {
    console.log("button is clicked.");
  }

  function input(value) {
    console.log(value);
  }

  return (
    <div className="demo">
      <button onClick={btn}>Click here</button>

      <input
        onChange={function write(e) {
          console.log(e.target.value);
        }}
        type="text"
        placeholder="Enter Anything..."
      />


      <input
        onChange={function write(e) {
        input(e.target.value);
        }}
        type="text"
        placeholder="Enter anything..."
      />
    </div>
  );
}

export default App;
