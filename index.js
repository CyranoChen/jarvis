const express = require("express");
const bodyParser = require("body-parser");

const fs = require('fs');
const http = require('http');
const https = require('https');

const config = require('./app/config');
const sync = require('./app/sync');

// ssl cert
// const credentials = {
//     key: fs.readFileSync('./cert/private.pem', 'utf8'),
//     cert: fs.readFileSync('./cert/client.crt', 'utf8')
// };

// initial config
const _configs = config.getConfigs();
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));

// static files
app.use('/', express.static('./public'));
app.use('/favicon', express.static('./favicon.ico'));
// app.use('/dist', express.static('./dist'));
// app.use('/node_modules', express.static('./node_modules'));

app.post('/api/sync', async function (req, res, next) {
    console.log('[sync]', new Date().toISOString());

    var result = await sync.getCameraVideo();
    console.log('camera video:', result);

    res.send({ "state": "success", "data": [] });
    console.log('synced');
    console.log('-'.repeat(100));
});

app.post('/api/init', async function (req, res, next) {
    console.log('[init]', new Date().toISOString());

    res.send({ "state": "success", "data": _configs });
    console.log('initialed');
    console.log('-'.repeat(100));
});

// http / https server
var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

const PORT = 8080;
// const SSLPORT = 9080;

httpServer.listen(PORT, () => {
    console.log('HTTP Server is running on port %s', PORT);
    console.log('-'.repeat(100));
});

// httpsServer.listen(SSLPORT, () => {
//     console.log('HTTPS Server is running on port %s', SSLPORT);
//     console.log('-'.repeat(100));
// });

