require('dotenv').config();

const express = require('express');
const helmet = require('helmet');

const app = express();

/* CONFIGS */
const PORT = process.env.PORT || 3000;

/* MIDDLEWARES */
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(helmet());

app.get('/ping', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'hello from demo-node-app'
    })
})

/* TODO: add appropiate context path for different versions of apis */
app.use('/api/v1', require('./api/v1/route/index'))

app.listen(
    PORT,
    () => console.log(`Server is running at port ${PORT}`)
);