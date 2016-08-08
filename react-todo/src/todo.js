import React from 'react';

var global_id = 3;

// class TodoItem extends React.Component {
//
//     render() {
//         return ();
//     }
// }

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.handleCheck = this.handleCheck.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleCheck(e) {
        console.log(e.target.id)
        console.log(e.target.checked)
        this.props.onCheck(e.target.id, e.target.checked);
    }

    handleDelete(e) {
        this.props.onDelete(e.target.value);
    }

    render() {
        const list_items = this.props.list.map(item => {
            if(item.isDone){
                return (
                    <li key={item.id}>
                        <input type="checkbox" name="" id={item.id} onChange={this.handleCheck} checked={item.isDone}/>
                        <span className="text-strikethrough">{item.text}</span>
                        <button onClick={this.handleDelete} value={item.id}>x</button>
                    </li>
                );
            }
            else{
                return (
                    <li key={item.id}>
                        <input type="checkbox" name="" id={item.id} onChange={this.handleCheck} checked={item.isDone}/>
                        <span className="text">{item.text}</span>
                        <button onClick={this.handleDelete} value={item.id}>x</button>
                    </li>
                );
            }
        });
        return (
            <div>
                <ul>
                    {list_items}
                </ul>
            </div>
        );
    }
}
class TodoCreateBox extends React.Component {
    constructor(props) {
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
    handleAdd(e) {
        const item = {
            id: global_id++,
            text: this.state.item_text,
            isDone: false
        };
        this.setState({item_text: ''});
        this.props.updateList(item);
    }
    handleKeyPress(e){
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
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list.concat()
        };

        this.updateList = this.updateList.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    updateList(item) {
        this.setState({
            list: this.state.list.concat([item])
        });
    }

    handleCheck(itemId, status) {
        const updatedList = this.state.list.map(item => {
            if(item.id === parseInt(itemId)){
                item.isDone = status
            }
            return item
        });
        this.setState({
            list: updatedList
        });
    }

    handleDelete(itemId){
        let index = -1;
        var tempList = this.state.list

        for(var i = 0; i < tempList.length; i++) {
            if( tempList[i].id === parseInt(itemId, 10) ){
                index = i;
                break;
            }
        }

        tempList.splice(index, 1)

        this.setState({
            list: tempList
        })
    }

    render() {
        return (
            <div>
                <TodoList list={this.state.list} onCheck={this.handleCheck} onDelete={this.handleDelete}/>
                <TodoCreateBox updateList={this.updateList}/>
            </div>
        );
    }
}

export default TodoApp;
