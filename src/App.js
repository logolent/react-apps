import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import TodoScreen from "./screens/todoScreen/TodoScreen";
import RegistrationScreen from "./screens/registrationScreen/RegistrationScreen";


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
            <Route exact path="/registration">
                <RegistrationScreen/>
            </Route>
        </Switch>
    </Router>
    )
};

export default App;
