
// import { Switch, Route } from "react-router-dom";
// import React from 'react';
import About from "../components/About";
import App from "../components/App";
import Home from '../components/Home';

// export default () => {
//     return(
//         <div>
//             <Switch>
//                 <Route path="/" exact component={ App } />
//                 <Route path="/about" component={ About } />
//                 <Route path="/home" component={ Home } />
//             </Switch>
//         </div>
//     );
// };

export default [
    {
        component: App,
        path: '/',
        exact: true
    },
    {
        component: Home,
        path: '/home'
    },
    {
        component: About,
        path: '/about'
    }
];