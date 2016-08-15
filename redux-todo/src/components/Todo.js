import React from 'react';

export default class Todo extends React.Component {
    render() {
        return (
            <li>
                <input
                    type="checkbox"
                    name="" id={this.props.id}
                    checked={this.props.isDone}
                    onChange={this.props.onChangeTodo}
                />
                <span
                    style={{
                        textDecoration: this.props.done ? 'line-through' : 'none'
                    }}
                >
                    {this.props.text}
                </span>
            </li>
        );
    }
}
