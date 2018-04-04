import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
import SignIn from "./components/SignIn";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={SignIn} />
          <Route path="/app" component={ToDoList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
