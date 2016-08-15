import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { changeTodoStatus } from '../actions';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onChangeTodo: (id) => {
          dispatch(changeTodoStatus(id))
      }
  }
}

const TodoListContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default TodoListContainer;
