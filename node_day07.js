const express = require('express');
const app = express();

function requestLoggerMiddleware(req, res, next){
    const timestamp = new Date().toISOString();
    const method = req.method;
    console.log('${timestamp} - ${method} request received.');
    next();
}

app.use(requestLoggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, Student');
});

const port = 3000;
app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}');
});