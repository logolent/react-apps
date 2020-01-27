import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import todoReducer from "./reducers/todoReducer";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    todo: todoReducer
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (enabledPersist) => {
    const store = createStore(
        enabledPersist? persistedReducer : rootReducer,
        compose(
            applyMiddleware(thunk),
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
                ? a => a
                : window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    if (!enabledPersist) {
        return { store };
    }

    const persistor = persistStore(store);
    return { store, persistor };
}