import React from 'react';

import Todo from './Todo';

export default class TodoList extends React.Component {
    render() {
        var todos = this.props.todos.map((todo) => {
            return (
                <Todo
                    key={todo.id}
                    text={todo.text}
                    done={todo.done}
                    onChangeTodo={() => this.props.onChangeTodo(todo.id)}
                />
            )
        });
        return (
            <ul>
                {todos}
            </ul>
        );
    }
}
