import "./App.css";

function App() {
  // if statement is used to conditionally render elements based on a certain condition. In this case, it checks if the length of the num array is greater than 0. If it is, it returns an h1 element with the value of num. If not, it returns a fragment with an h1 element and a commented-out ul element that maps over the num array and renders each item as a list item.

  // let num = ["1", "2", "3", "4", "5"];
  // if (num.length > 0) {
  //   return <h1>{num}</h1>;
  // }

  // Ternary operator
  let num = [];
  return (
    <>
      <h1>It is the conditional rendering example</h1>
      {num.length === 0 ? <h3>No item found</h3> : <h3>Items found</h3>}
      {/* This is a ternary
      operator that checks if the length of the num array is equal to 0. If it
      is, it renders an h3 element with the text "No item found". If not, it
      renders null, which means nothing will be rendered in that case. */}
      <ul className="list">
        {num.map((item) => (
          <li key={item} className="list-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
