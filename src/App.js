import { Component, Fragment } from "react";
import "./App.css";
import Fruit from "./components/Fruits";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Fruit />
      </Fragment>
    );
  }
}

export default App;
