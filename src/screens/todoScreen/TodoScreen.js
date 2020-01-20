import React from "react";
import sid from "shortid";
import TodoList from "../../components/todoapp/todoList/TodoList";
import AddTodo from "../../components/todoapp/addTodo/AddTodo";
import TodoDetails from "../../components/todoapp/todoDetails/TodoDetails";
import TodoEmpty from "../../components/todoapp/todoEmpty/TodoEmpty";
import Layout from "../../components/todoapp/layout/Layout";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class TodoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            todos: !this.props.preview ?
                ( JSON.parse(localStorage.getItem('todos')) || []) : [
                    {id: '1', title: 'todo 1', completed: false},
                    {id: '2', title: 'todo 2', completed: true},
                    {id: '3', title: 'todo 3', completed: true},
                    {id: '4', title: 'todo 4', completed: false}
                ],
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

    onUpdate = (id, title) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, title }
                }
                return todo;
            })
        }), this.setLocalStorage);
    };

    renderAddTodo = () => {
        const { loading } = this.state;
        return (
            loading ? (
                this.renderFakeAddTodo()
            ) : (
                <AddTodo
                    onAdd={this.onAdd}
                    preview={this.props.preview}
                />
            )
        )
    };

    renderFakeAddTodo = () => {
        return (
            <div className="add-todo-fake">
                <div className="add-todo-fake__input"/>
                <div className="add-todo-fake__button"/>
            </div>
        )
    };

    renderTodoList = () => {
        const { todos, loading } = this.state;
        return (
            loading ? (
                <div className="lds-dual-ring"/>
            ) : todos.length > 0 ? (
                <TodoList
                    todos={this.state.todos}
                    onToggle={this.onToggle}
                    onDelete={this.onDelete}
                />
            ) : (
                <TodoEmpty/>
            )
        )
    };

    renderTodoDetails = () => {
        return (
            <TodoDetails
                onUpdate={this.onUpdate}
            />
        )
    };

    render() {
        return (
            this.props.preview ? (
                <Layout
                    todoAdd={this.renderAddTodo}
                    todoList={this.renderTodoList}
                />
            ) : (
                <Router>
                    <Switch>
                        <Route path="/todo/:id">
                            <Layout
                                todoDetails={this.renderTodoDetails}
                            />
                        </Route>
                        <Route path="/todo">
                            <Layout
                                todoAdd={this.renderAddTodo}
                                todoList={this.renderTodoList}
                            />
                        </Route>
                    </Switch>
                </Router>
            )
        );
    }
}

export default TodoScreen;