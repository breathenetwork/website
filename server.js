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
    const title = 'Breathe!';
    const desc = 'Want to breathe?';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const proto = req.headers['x-forwarded-proto'] || req.protocol;
    const baseurl = proto + '://' + host;
    renderToNodeStream(
        <html>
        <head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="description" content={desc}/>
            <meta name="og:title" content={title}/>
            <meta name="og:description" content={desc}/>
            <meta name="og:url" content={baseurl}/>
            <meta name="og:image" content='/static/img/lain.jpg'/>
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
