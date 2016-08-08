import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './todo';
import './styles/main.css';

var global_list = [
    {
        id: 1,
        text: "Get Milk",
        isDone: true
    }, {
        id: 2,
        text: "Drink Milk",
        isDone: false
    }
];

ReactDOM.render(
  <TodoApp list={global_list}/>,
  document.getElementById('root')
);
