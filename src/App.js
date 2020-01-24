import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import TodoScreen from "./screens/todoScreen/TodoScreen";


const App = () => {
    return (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/">
                <HomeScreen/>
            </Route>
            <Route path="/todo">
                <TodoScreen/>
            </Route>
        </Switch>
    </Router>
    )
};

export default App;
