const express = require('express');
const app = express();

const server = app.listen(7000, () => {
    console.log(`Webserver Active → PORT ${server.address().port}`);
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});