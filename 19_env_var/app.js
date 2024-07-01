// const ps = process.env;
// console.log(ps);

const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT;
const dbName = process.env.DATABASE_NAME;
const dbPw = process.env.DATABASE_PW;

app.listen(port, () => {
    console.log(`Server running...PORT: ${port}`);
    console.log(`Database name: ${dbName}, Database Password: ${dbPw}`);
})

