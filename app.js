const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./src/routes/user.routes');
const app = express();
const database = require('./config/database');
// config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// routes
app.get('/', (res, req) => {
    res.send('Hello World');
});

app.use('/user', userRouter);
// start
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});