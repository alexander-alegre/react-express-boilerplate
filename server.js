const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
app.set('port', PORT);

app.use(express.static(path.join(__dirname, './public')));

app.get('*', (req, res) => {
    console.log('Serving ', req.url);
    res.sendFile(__dirname + '/public/app.html');
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});