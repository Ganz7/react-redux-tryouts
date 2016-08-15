var nextTodoItemID = 1001;

export const addTodo = (todoText) => {
  return {
    type: "ADD_TODO",
    id: nextTodoItemID++,
    text: todoText,
    done: false
  }
}

export const changeTodoStatus = (id) => {
    return {
        type: "CHANGE_TODO",
        id
    }
}
