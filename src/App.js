import React from 'react';
import sid from 'shortid';

import './App.scss';
import Header from "./components/header/Header";
import TodoList from "./components/todoList/TodoList";
import AddTodo from "./components/addTodo/AddTodo";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            todos: JSON.parse(localStorage.getItem('todos')) || [],
            loading: false
        }), 1000)
    }

    setLocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    };

    onToggle = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            })
        }), this.setLocalStorage)
    };

    onAdd = (title) => {
        this.setState(prevState => ({
            todos: [
                ...prevState.todos,
                {
                    id: sid(),
                    title,
                    completed: false
                }
            ]
        }), this.setLocalStorage);


    };

    onDelete = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== id)
        }), this.setLocalStorage);
    };

    renderTodoList = () => {
        return (
            <TodoList
                todos={this.state.todos}
                onToggle={this.onToggle}
                onDelete={this.onDelete}
            />
        )
    };

    renderAddTodo = () => {
        return(
            <AddTodo
                onAdd={this.onAdd}
            />
        )
    };

    renderFakeAddTodo = () => {
        return (
            <div className="add-todo-fake" onSubmit={this.onSubmitHandler}>
                <div className="add-todo-fake__input"/>
                <div className="add-todo-fake__button"/>
            </div>
        )
    };

    render() {
        const { todos, loading } = this.state;

        return (
            <div className="todo-app">
                <Header/>
                <div className="todo-container">
                    {loading ? (
                        <>
                            {this.renderFakeAddTodo()}
                            <div className="lds-dual-ring"></div>
                        </>
                    ) : todos.length > 0 ? (
                        <>
                            {this.renderAddTodo()}
                            {this.renderTodoList()}
                        </>
                    ) : (
                        <>
                            {this.renderAddTodo()}
                            <div className="todo-container__empty">
                                <h2> Больше нет дел </h2>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    }
}

export default App;
