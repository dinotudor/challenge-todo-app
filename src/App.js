import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import AddTodo from './components/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>TECH CHALLENGE</h1>
          <Dashboard />
          <AddTodo />
      </div>
    );
  }
}

export default App;
