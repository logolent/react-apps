import React from 'react';
import PropTypes from 'prop-types';

import { useParams, withRouter } from 'react-router-dom';


const TodoDetails = ({ onUpdate, history }) => {

    const input = React.createRef();
    const { id } = useParams();
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todo = todos.find(todo => todo.id === id);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const value = input.current.value;
        if (value.trim() && value !== todo.title) {
            onUpdate(id, value);
        }

        history.push('/todo');
    };

    return (
        <div className="todo-details">
            {todo === undefined ? (
                <p className="todo-details__id">
                    Todo not found
                </p>
            ) : (
                <>
                    <p className="todo-details__id">
                        Todo id: {todo.id}
                        <br/>
                        Status: {todo.completed ? 'completed' : 'not completed'}
                    </p>
                    <form className="todo-details__form" onSubmit={onSubmitHandler}>
                        <input
                            className="todo-details__input"
                            type="text"
                            maxLength="50"
                            placeholder={todo.title}
                            ref={input}
                        />
                        <button className="todo-details__button"> Обновить </button>
                    </form>
                </>
            )}
        </div>
    )
};

TodoDetails.propTypes = {
    onUpdate: PropTypes.func.isRequired
};

export default withRouter(TodoDetails);