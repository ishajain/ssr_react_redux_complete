
// import { Switch, Route } from "react-router-dom";
// import React from 'react';
import About from "../components/About";
import App from "../components/App";
import Home from '../components/Home';
import Todos from '../components/Todos';
import TodoCard from '../components/TodoCard';

export default [
    {
        component: App,
        path: '/',
        exact: true
    },
    // {
    //     component: About,
    //     path: '/about'
    // },
    {
        component: Todos,
        path: '/todos',
        exact:true
    
    },
    // {
    //     component: TodoCard,
    //     path: '/todos/:id',
    //     exact:true
    // }
];