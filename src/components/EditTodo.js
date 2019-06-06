import React, { Component } from 'react'
import todos from './../lib/todo-services'

class EditTodo extends Component {
  state = {
    todos: []
  }

  componentDidMount (id) {
    todos.getOne(id)
      .then((todos)=> {
        this.setState({todos})
      })
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
              placeholder="add task"
              value={this.title}
              onChange={this.handleChange}
            />
        </form>
      </div>
    )
  }
}

export default EditTodo;
