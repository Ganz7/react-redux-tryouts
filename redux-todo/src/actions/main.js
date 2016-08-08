var nextTodoItemID = 1001;

export const addTodo = (todoText) => {
  return {
    type: "ADD_TODO",
    id: nextTodoItemID++,
    text: todoText
  }
}
