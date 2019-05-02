import express from 'express';
import {  matchRoutes } from 'react-router-config';
import render from './render';
import Routes from '../routes';
import { store } from '../store';

const app = express();
app.use(express.static("dist"));
const PORT = process.env.PORT || 9000;

app.get('*', async (req, res) => {
    const actions = matchRoutes(Routes, req.path)
        .map(({ route }) => {  return route.component.fetchData ? route.component.fetchData({...store, path: req.path }) : null;})
        .map(async actions => await Promise.all(
            (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
        )
        );
  
    await  Promise.all(actions);
    const context = {};
   
    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end(render(req.path, context) );
} );

app.listen(PORT, () => {
    console.log(`App is listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.');
});

