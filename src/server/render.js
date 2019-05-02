import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import Routes from '../routes';
import { store } from '../store';

export default (pathname,context) => {
    const jsx = ( 
        <Provider store={store}>
            <StaticRouter location={pathname} context={context}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );
    const reactDom = renderToString( jsx );
    
    return `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <title>SSR</title>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href="/main.css" rel="stylesheet" />
                </head>
                <body>
                    <div id="root">${ reactDom }</div>
                </body>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src="/bundle.js" defer></script>
                </html>
        `;
};

