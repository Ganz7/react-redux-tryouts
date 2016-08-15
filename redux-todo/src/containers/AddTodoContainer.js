import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import { addTodo } from '../actions';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
      onAddTodoClick: (todoText) => {
          dispatch(addTodo(todoText));
      }
  }
}

const AddTodoContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);

export default AddTodoContainer;
