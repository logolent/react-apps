import React from 'react';
import PropTypes from 'prop-types';
import {TodoProps} from "../../../propTypes/proptypes";
import { Link } from "react-router-dom";

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
            <li className="todo">
                <div className="todo__content">
                    <input
                        onClick={this.onToggleHandler}
                        className="todo__checkbox"
                        type="checkbox"
                        checked={completed}
                        readOnly/>
                    <span className="todo__index">{index + 1}.</span>
                    <Link to={'/todo/' + todo.id}>
                    <div
                        className="todo__title"
                        style={titleStyle}>{title}
                    </div>
                    </Link>
                </div>

                <button
                    className="todo__button"
                    onClick={this.onDeleteHandler}
                > X </button>
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