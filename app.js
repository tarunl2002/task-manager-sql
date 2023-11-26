const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors');


const task = require('./routes/taskRoute');


app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "5mb"}));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use(cors());

app.use('/api',task)

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Serveris running on port ${PORT}`);
})