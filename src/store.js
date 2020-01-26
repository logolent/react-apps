import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import storage from 'redux-persist/es/storage';
import { persistStore, persistReducer } from "redux-persist";

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
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    if (!enabledPersist) {
        return { store };
    }

    const persistor = persistStore(store);
    return { store, persistor };
}