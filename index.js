const express = require('express');
const bodyParser = require('body-parser');

const loginRoutes = require('./routes/login.js');
const messageRoutes = require('./routes/message.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 8000;

app.use('/', loginRoutes);
app.use('/', messageRoutes);

app.listen(PORT, () => {
    console.log(`Server is Successfully running on port ${PORT}`);
})