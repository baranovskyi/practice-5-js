import React from "react"
import ReactDOM from "react-dom"
import Weather from "./components/Weather";
import reducer from "./reducers"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Weather />
    </Provider>,
    document.querySelector("#task4")
);
