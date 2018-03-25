import "./ToDoList.css";
import React, { Component } from "react";
import ToDoListItem from "./ToDoListItem";

class ToDoList extends Component {
  state = {
    addFormVisible: false,
    addFormValue: ""
  };

  handleInputChange = event => {
    this.setState({ addFormValue: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  renderAddForm = () => {
    if (this.state.addFormVisible) {
      return (
        <div className="col s12">
          <form onSubmit={this.handleFormSubmit}>
            <div className="input-field">
              <i className="material-icons prefix">note_add</i>
              <input
                onChange={this.handleInputChange}
                id="toDoNext"
                type="text"
              />
              <label for="toDoNext">What To Do Next</label>
            </div>
          </form>
        </div>
      );
    }
  };

  render() {
    const { addFormVisible } = this.state;

    return (
      <div className="to-do-list-container">
        <div className="row">
          {this.renderAddForm()}
          <ToDoListItem />
        </div>
        <div className="fixed-action-btn">
          <button
            onClick={() => this.setState({ addFormVisible: !addFormVisible })}
            className="btn-floating btn-large teal darken-2"
          >
            {addFormVisible ? (
              <i className="large material-icons">close</i>
            ) : (
              <i className="large material-icons">add</i>
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default ToDoList;
