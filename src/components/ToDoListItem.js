import React, { Component } from "react";
import { connect } from "react-redux";
import { completeToDo } from "../actions";

class ToDoListItem extends Component {
  handleCompleteClick = completeToDoId => {
    const { completeToDo } = this.props;
    completeToDo(completeToDoId);
  };

  render() {
    const { todoId, todo } = this.props;
    return [
      <div key="toDoName" className="col s10 to-do-list-item teal lighten-2">
        <h4>{todo.title}</h4>
      </div>,
      <div
        onClick={() => this.handleCompleteClick(todoId)}
        key="toDoAction"
        className="col s2 to-do-list-item teal lighten-2"
      >
        <h4>X</h4>
      </div>
    ];
  }
}

export default connect(null, { completeToDo })(ToDoListItem);
