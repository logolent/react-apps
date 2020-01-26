import {TODO_ACTIONS} from "../actions/constants";
import sid from "shortid";

const initialState = {
    todos: [],
    loading: true
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
            const { indicator } = payload;
            return {
                ...state,
                loading: indicator
            }
        }

        case TODO_ACTIONS.UPDATE_TODOS: {
            const { todos } = payload;
            return {
                ...state,
                todos
            }
        }

        default: {
            return state;
        }
    }
}

export default todoReducer;