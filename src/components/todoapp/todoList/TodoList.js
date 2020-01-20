import React from 'react';
import PropTypes from 'prop-types';
import {TodoProps} from "../../../propTypes/proptypes";

import './TodoList.scss';
import Todo from "../todo/Todo";


const TodoList = ({ todos = [], onToggle, onDelete }) => {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => {
                return <Todo
                    key={todo.id}
                    todo={todo}
                    index={index}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            })}
        </ul>
    )
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(TodoProps),
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default TodoList;