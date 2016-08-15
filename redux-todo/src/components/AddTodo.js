import React from 'react';

export default class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            item_text: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        this.setState({item_text: e.target.value});
    }

    handleAdd() {
        if(!this.state.item_text.trim()) {
          return;
        }
        this.props.onAddTodoClick(this.state.item_text.trim());
        this.setState({item_text: ''});
    }

    handleKeyPress(e) {
        if(e.key === 'Enter'){
            this.handleAdd(e);
        }
    }

    render() {
        return (
            <div>
                <input type="text" id="new_item" value={this.state.item_text} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                <button type="button" onClick={this.handleAdd} >Add</button>
            </div>
        );
    }
}
