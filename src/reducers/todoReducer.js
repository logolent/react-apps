import {TODO_ACTIONS} from "../actions/constants";
import sid from "shortid";

const initialState = {
    todos: [
        {id: '1', title: 'title 1', completed: false},
        {id: '2', title: 'title 2', completed: false},
        {id: '3', title: 'title 3', completed: false}
    ],
    loading: false
};

function todoReducer(state = initialState, { type, payload }) {
    switch (type) {
        case TODO_ACTIONS.ADD_TODO: {
            const { title } = payload;
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: sid(), title, completed: false }
                ]
            }
        }

        case TODO_ACTIONS.DELETE_TODO: {
            const { id } = payload;
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== id)
            }
        }

        case TODO_ACTIONS.UPDATE_TODO: {
            const { id, title } = payload;
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === id) {
                        return { ...todo, title }
                    }
                    return todo;
                })
            }
        }

        case TODO_ACTIONS.TOGGLE_COMPLETE: {
            const { id } = payload;
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === id) {
                        return { ...todo, completed: !todo.completed }
                    }
                    return todo;
                })
            }
        }

        case TODO_ACTIONS.SET_LOADING: {
            const { state } = payload;
            return {
                ...state,
                loading: state
            }
        }

        default: {
            return state;
        }
    }
}

export default todoReducer;