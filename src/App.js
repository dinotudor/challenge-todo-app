import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import EditTodo from './components/EditTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>TECH CHALLENGE</h1>
          <Dashboard />
          <EditTodo />
      </div>
    );
  }
}

export default App;
