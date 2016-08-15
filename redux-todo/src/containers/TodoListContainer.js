import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProps = (state = []) => {
  return {
    todos: state.todos
    //todos: [{id:1, text: "HI PEOPLE"}, {id:2, text: "WHATS UP PEOPLE"}]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const TodoListContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default TodoListContainer;
