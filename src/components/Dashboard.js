import React, { Component } from 'react'
import todosService from './../lib/todo-services'

class Dashboard extends Component {
    state = {
      todos: []
}

/*   addOne = () => {

  } */

  componentDidMount(){
    todosService.getAll()
    .then((todos)=>{
    this.setState({todos})
    })
  }

  render() {
    console.log('STATE',this.state.todos);
    const { todos } = this.state;
    console.log('TODOS', todos)
    return (
      <div>
        { todos?
            todos.map((todosObj) =>{
                return <p key={todosObj._id}>{todosObj.title}</p>
              })
          :
            <h1>Dont have todos</h1>
        }
      </div>
    )
  }
}

export default Dashboard;
