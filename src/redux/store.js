import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducers from './reducers/rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;