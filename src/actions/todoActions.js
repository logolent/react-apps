import {TODO_ACTIONS} from "./constants";

export const addTodo = title => ({
    type: TODO_ACTIONS.ADD_TODO,
    payload: { title }
});

export const deleteTodo = id => ({
    type: TODO_ACTIONS.DELETE_TODO,
    payload: { id }
});

export const updateTodo = (id, title) => ({
    type: TODO_ACTIONS.UPDATE_TODO,
    payload: { id, title }
});

export const toggleComplete = id => ({
    type: TODO_ACTIONS.TOGGLE_COMPLETE,
    payload: { id }
});

export const setLoading = state => ({
    type: TODO_ACTIONS.SET_LOADING,
    payload: { state }
});