import React, { Component } from "react";

class ToDoListItem extends Component {
  render() {
    return [
      <div key="toDoName" className="col s10 to-do-list-item teal lighten-2">
        <h4>Popratat</h4>
      </div>,
      <div key="toDoAction" className="col s2 to-do-list-item teal lighten-2">
        <h4>X</h4>
      </div>
    ];
  }
}

export default ToDoListItem;
