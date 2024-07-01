// using .env 

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

const config = {
    "username": process.env.USERNAME,
    "password": process.env.DATABASE_PW,
    "database": process.env.DATABASE_NAME,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
}

module.exports = config;