import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "materialize-css/dist/css/materialize.min.css";
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from '../routes';
import { store } from '../store';

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    , document.getElementById("root"));

