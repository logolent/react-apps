import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import createStore from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
const enablePersist = true;
const { store, persistor } = createStore(enablePersist);

const ConditionalWrapper = ({condition, wrap, children}) => condition? wrap(children) : children;


ReactDOM.render(
    <Provider store={store}>
        <ConditionalWrapper
            condition={enablePersist}
            wrap={(children) =>
                <PersistGate loading={<div>test loader</div>} persistor={persistor}>
                    {children}
                </PersistGate>
            }
        >
            <App/>
        </ConditionalWrapper>


    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
