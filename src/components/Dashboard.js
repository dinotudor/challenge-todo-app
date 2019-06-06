import React, { Component } from 'react'
import todos from './../lib/todo-services'

class Dashboard extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    console.log('DID MOUNT', this.state)
    todos.getAll()
      .then(({todos})=>this.setState({todos}))
  }

  render() {
    const { title } = this.state;
    console.log('TITLE' , title);
    return (
      <div>
        <h1>DASHBOARD</h1>

      </div>
    )
  }
}

export default Dashboard;
