import React, { Component } from 'react'

class EditTodo extends Component {
  state = {
    todos: []
  }

  componentDidMount () {

  }

  handleFormSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  render() {
    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
          <label>Edit Todo</label>
            <input
              type="text"
              name="title"
              placeholder="todo"
              value={this.username}
              onChange={this.handleChange}
            />
        </form>
      </div>
    )
  }
}

export default EditTodo;
