import React from "react";
import ReactDOM from "react-dom";
import aa from "./test";
import ToDoFeature from "./components/Todos";
const App = () => {
  return (
    <div>
      <p>React here!</p>
      <ToDoFeature />
    </div>
  );
};
export default App;
ReactDOM.render(<ToDoFeature />, document.getElementById("app"));