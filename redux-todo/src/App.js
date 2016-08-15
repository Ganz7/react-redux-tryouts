import React, { Component } from 'react';
import TodoListContainer from './containers/TodoListContainer';
import AddTodoContainer from './containers/AddTodoContainer';
//import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodoContainer />
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
