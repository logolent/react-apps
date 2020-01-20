import React from "react";
import sid from "shortid";
import "./TodoScreen.scss";
import TodoList from "../../components/todoapp/todoList/TodoList";
import AddTodo from "../../components/todoapp/addTodo/AddTodo";

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
                preview={this.props.preview}
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
                <div className="todo-container">
                    {loading ? (
                        <>
                            {this.renderFakeAddTodo()}
                            <div className="lds-dual-ring"/>
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

export default TodoScreen;