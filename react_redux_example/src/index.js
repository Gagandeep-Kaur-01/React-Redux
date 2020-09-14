import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index.js";
import App from "./js/components/App.js";

render(
    <Provider store = { store }>
        <App />        
    </Provider>,
    document.getElementById("root")
);