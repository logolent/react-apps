import React from 'react';
import './Layout.scss';

const Layout = ({
    todoAdd : TodoAddComponent,
    todoList : TodoListComponent,
    todoDetails : TodoDetailsComponent
}) => {
    return (
        <div className="todolist-layout">
            <div className="todolist-layout__container">
                {TodoAddComponent ? (
                    <TodoAddComponent/>
                ) : (
                    <></>
                )}
                {TodoListComponent ? (
                    <TodoListComponent/>
                ) : (
                    <></>
                )}
                {TodoDetailsComponent ? (
                    <TodoDetailsComponent/>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
};

export default Layout;