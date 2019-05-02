import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "materialize-css/dist/css/materialize.min.css";
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { ModalContainer  , ModalRoute  } from 'react-router-modal';
import Routes from '../routes';
import { store } from '../store';
import 'react-router-modal/css/react-router-modal.css';
import About from "../components/About"
;
import TodoCard from '../components/TodoCard';

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}
            
            </div>
            <ModalRoute component={About} path="/about" parentPath="/"  />
            <ModalRoute path="/todos/:id" parentPath="/todos" component={TodoCard} />
            
            <ModalContainer />
           
        </BrowserRouter>
    </Provider>
    , document.getElementById("root"));

