// const ps = process.env;
// console.log(ps);

const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
    path: path.resolve(__dirname, '.env')
})  // default .env file
dotenv.config({
    // NODE_ENV 따라서 적절한 .env 파일을 로드
    path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
    override: true,
});  // load env file depending on NODE_ENV

const port = process.env.PORT;
const dbName = process.env.DATABASE_NAME;
const dbPw = process.env.DATABASE_PW;

app.listen(port, () => {
    console.log(`Server running...PORT: ${port}`);
    console.log(`Database name: ${dbName}, Database Password: ${dbPw}`);
})