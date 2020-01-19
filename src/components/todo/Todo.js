import React from 'react';
import PropTypes from 'prop-types';
import {TodoProps} from "../../propTypes/proptypes";

import './Todo.scss';

const styles = {
    strike: {
        textDecoration: "line-through"
    }
};

class Todo extends React.Component {
    onToggleHandler = () => {
        const { todo, onToggle } = this.props;
        onToggle(todo.id);
    };

    onDeleteHandler = () => {
        const { todo, onDelete } = this.props;
        onDelete(todo.id);
    };

    render() {
        const { index, todo } = this.props;
        const { title, completed } = todo;
        const titleStyle = completed ? styles.strike : {};

        return (
            <li
                className="todo"
                onClick={this.onToggleHandler}
            >
                <div className="todo__content">
                    <input className="todo__checkbox" type="checkbox" checked={completed} readOnly/>
                    <span className="todo__index">{index + 1}.</span>
                    <div className="todo__title" style={titleStyle}>{title}</div>
                </div>

                <button
                    className="todo__button"
                    onClick={this.onDeleteHandler}
                >
                    X
                </button>
            </li>
        );
    }
}

Todo.propTypes = {
    index: PropTypes.number.isRequired,
    todo: TodoProps,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Todo;