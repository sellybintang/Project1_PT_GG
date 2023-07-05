const express = require('express');
const morgan = require('morgan');
const router = require('./app/routes/index'); 

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});