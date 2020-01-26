import React from "react";
import PropTypes from 'prop-types';

import TodoList from "../../components/todoapp/todoList/TodoList";
import AddTodo from "../../components/todoapp/addTodo/AddTodo";
import TodoEmpty from "../../components/todoapp/todoEmpty/TodoEmpty";
import Layout from "../../components/todoapp/layout/Layout";
import AddTodoLoader from "../../components/todoapp/addTodoLoader/AddTodoLoader";

import { connect } from "react-redux";
import { addTodo, deleteTodo, updateTodo, toggleComplete, loadTodos } from "../../actions/todoActions";

class TodoScreen extends React.Component {

    componentDidMount() {
        this.props.loadTodos();
    }

    renderAddTodo = () => {
        const { loading, addTodo, preview } = this.props;
        return (
            loading ? (
                <AddTodoLoader/>
            ) : (
                <AddTodo
                    onAdd={addTodo}
                    preview={preview}
                />
            )
        )
    };

    /*renderFakeAddTodo = () => {
        return (
            <div className="add-todo-fake">
                <div className="add-todo-fake__input"/>
                <div className="add-todo-fake__button"/>
            </div>
        )
    };*/

    renderTodoList = () => {
        const { todos, loading, deleteTodo, toggleComplete } = this.props;
        return (
            loading ? (
                <div className="lds-dual-ring"/>
            ) : todos.length > 0 ? (
                <TodoList
                    todos={todos}
                    onToggle={toggleComplete}
                    onDelete={deleteTodo}
                />
            ) : (
                <TodoEmpty/>
            )
        )
    };

    render() {
        return (
            <Layout
                todoAdd={this.renderAddTodo}
                todoList={this.renderTodoList}
            />
        );
    }
}

TodoScreen.propTypes = {
    todos: PropTypes.array,
    loading: PropTypes.bool,
    addTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
    toggleComplete: PropTypes.func,
    loadTodos: PropTypes.func
};

const mapStateToProps = state => ({
    todos: state.todo.todos,
    loading: state.todo.loading
});

const mapDispatchToProps = ({
    addTodo,
    deleteTodo,
    updateTodo,
    toggleComplete,
    loadTodos
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen);