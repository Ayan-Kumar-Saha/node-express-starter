require('dotenv').config();

const express = require('express');
const helmet = require('helmet');

const app = express();

/* CONFIGS */
const PORT = process.env.PORT || 3000;

/* MIDDLEWARES */
app.use(helmet());

app.get('/ping', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'hello from demo-node-app'
    })
})

app.listen(
    PORT,
    () => console.log(`Server is running at port ${PORT}`)
);