import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Card from "./components/card/Card";

import Header from "./components/header/Header";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import TodoScreen from "./screens/todoScreen/TodoScreen";


const App = () => {
    return (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/">
                <HomeScreen>
                    <Card title="TodoList Preview" linkTo="/todo">
                        <TodoScreen preview={true}/>
                    </Card>
                </HomeScreen>
            </Route>
            <Route exact path="/todo">
                <TodoScreen/>
            </Route>
            <Route path="/todo/:id">
                <h1>Another page</h1>
            </Route>
        </Switch>
    </Router>
    )
};

export default App;
