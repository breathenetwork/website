import express from 'express';
import path from 'path';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import App from './src/App';
import {StaticRouter} from 'react-router-dom';

const port = 3000;
const server = express();

server.use('/static', express.static(path.join('dist', 'static')));
server.get('*', (req, res) => {
    renderToNodeStream(
        <html>
        <head>
            <title>Breathe!</title>
            <link rel="stylesheet" href="/static/css/style.css"/>
        </head>
        <body>
        <div id="app">
            <StaticRouter location={req.url} context={{}}>
                <App/>
            </StaticRouter>
        </div>
        <script src="/static/js/client.js"/>
        </body>
        </html>
    ).pipe(res);
});

server.listen(port, () => console.log(`Serving at http://localhost:${port}`));