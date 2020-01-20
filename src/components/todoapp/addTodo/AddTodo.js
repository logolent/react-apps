import React from 'react';
import PropTypes from 'prop-types';

import './AddTodo.scss';


class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    componentDidMount() {
        if (!this.props.preview) {
            this.input.current.focus();
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const value = this.input.current.value;
        this.input.current.value = '';
        if (value.trim()) {
            this.props.onAdd(value);
        }
        this.input.current.focus();
    };

    render() {
        return (
            <form className="add-todo" onSubmit={this.onSubmitHandler}>
                <input className="add-todo__input"
                       type="text"
                       maxLength="50"
                       ref={this.input}/>
                <button className="add-todo__button"> Добавить </button>
            </form>
        )
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired,
    preview: PropTypes.bool
};

export default AddTodo;