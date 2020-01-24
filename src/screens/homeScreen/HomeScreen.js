import React from 'react';
import './HomeScreen.scss';
import TodoScreen from "../todoScreen/TodoScreen";
import Card from "../../components/card/Card";


const HomeScreen = ({children}) => {
    return (
        <div className="home">
            <Card title="TodoList Preview" linkTo="/todo">
                <TodoScreen preview={true}/>
            </Card>
        </div>
    )
};

export default HomeScreen;