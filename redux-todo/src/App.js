import React, { Component } from 'react';
import TodoListContainer from './containers/TodoListContainer';
//import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
