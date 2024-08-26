const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const PORT = 8000;

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
)

app.use(express.json());
app.get('/', (res, req) => {
    res.send('Hello World');
})