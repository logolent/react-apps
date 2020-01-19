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
            todos: [
                { id: sid(), title: 'first', completed: false},
                { id: sid(), title: 'second', completed: false},
                { id: sid(), title: 'third', completed: false}
            ],
            loading: false
        }), 1000)
    }

    onToggle = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            })
        }))
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
        }))
    };

    onDelete = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== id)
        }))
    };

    render() {
        const { todos, loading } = this.state;

        return (
            <div className="todo-app">
                <Header/>
                {loading ? (
                    <span>Загрузка</span>
                ) : todos.length > 0 ? (
                    <div className="todo-container">
                        <AddTodo
                            onAdd={this.onAdd}
                        />
                        <TodoList
                            todos={this.state.todos}
                            onToggle={this.onToggle}
                            onDelete={this.onDelete}
                        />
                    </div>
                ) : (
                    <span>Больше нет дел</span>
                )}

            </div>
        );
    }
}

export default App;
