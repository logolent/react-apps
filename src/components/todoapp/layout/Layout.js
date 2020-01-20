import React from 'react';
import './Layout.scss';

const Layout = ({
    todoAdd : TodoAddComponent,
    todoList : TodoListComponent,
    todoDetails : TodoDetailsComponent
}) => {
    return (
        <div className="todolist-layout">
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
    )
};

export default Layout;