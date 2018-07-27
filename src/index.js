const express = require('express'), app = express(), template = require('./template');
const path = require('path');

// Serving static files
app.use('/', express.static(path.resolve(__dirname, '/')));
//app.use('/media', express.static(path.resolve(__dirname, 'media')));

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000);

//SSR function import
const ssr = require('./server');

// server rendered home page
app.get('/', (req, res) => {
    const {content}  = ssr();
    const response = template(content);
    res.setHeader('Cache-Control', 'assets, max-age=604800')
    res.send(response);
});

// Pure client side rendered page
app.get('/client', (req, res) => {
    let response = template('Client Side Rendered page');
    res.setHeader('Cache-Control', 'assets, max-age=604800');
    res.send(response);
});