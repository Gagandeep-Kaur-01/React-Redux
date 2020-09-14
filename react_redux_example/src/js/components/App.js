import React from "react";
import List from "./List";
import Form from "./Form";


const App = () => (
    <>
      <div>
        <h2> Articles </h2>
        <List />
      </div>

      <div>
        <h2>
        Add a new article
        <Form />
        </h2>
      </div>
    </>
);

export default App;