const todo = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_TODO':
            if(state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                done: !state.done
            });
        default:
            return state;
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat({
                id: action.id,
                text: action.text,
                done: action.done
            });
        case 'CHANGE_TODO':
            return state.map(x => {
                return todo(x, action);
            });
        default:
            return state;
    }
}

export default todos;
