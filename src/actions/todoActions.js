import {TODO_ACTIONS} from "./constants";

export const addTodo = title => ({
    type: TODO_ACTIONS.ADD_TODO,
    payload: {title}
});

export const deleteTodo = id => ({
    type: TODO_ACTIONS.DELETE_TODO,
    payload: {id}
});

export const updateTodo = (id, title) => ({
    type: TODO_ACTIONS.UPDATE_TODO,
    payload: {id, title}
});

export const toggleComplete = id => ({
    type: TODO_ACTIONS.TOGGLE_COMPLETE,
    payload: {id}
});

export const setLoading = indicator => ({
    type: TODO_ACTIONS.SET_LOADING,
    payload: {indicator}
});

export const updateTodos = todos => ({
    type: TODO_ACTIONS.UPDATE_TODOS,
    payload: {todos}
});

const stubTodos = [
    {id: '1', title: 'title 1', completed: false},
    {id: '2', title: 'title 2', completed: false},
    {id: '3', title: 'title 3', completed: false}
];

export const loadTodos = () =>
    async (dispatch, getState) => {
        const todosExist = Boolean(getState().todo.todos.length);
        if (!todosExist) {
            await setTimeout(() => {
                dispatch(updateTodos(stubTodos));
                dispatch(setLoading(false));
            }, 2000)
        }
};