import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import store from "./store";

import "assets/css/index.css";
import App from "./app";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>

);

reportWebVitals();