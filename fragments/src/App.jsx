import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      {/* React.Fragment is a component that allows you to group multiple elements without adding extra nodes to the DOM. It is useful when you want to return multiple elements from a component without wrapping them in an additional HTML element like a div. In this case, it is used to wrap the
      h1 and ul elements together. 

      Short Form = <></>
      

      */}
      <h1>A Small Example</h1>
      <ul class="list-group">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </React.Fragment>
  );
}

export default App;
