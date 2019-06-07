import React, { Component } from 'react'
import todosService from './../lib/todo-services'

class AddTodo extends Component {
  constructor(props){
    super(props)
    this.state = {
    todos: []
    }
  }

  createOne = () => {
    todosService.createOne()
  }


  handelFormSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state

  }

  handelChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }


  render() {
    return (
      <div>
        <form>
          <label>Add Task</label>
          <input
            type="text"
            name="title"
            placeholder="add task"
            value={this.title}
            onChange={this.handleChange}
          />

          <button type="submit" value="Send">Add</button>
        </form>
      </div>
    )
  }
}
export default AddTodo;
