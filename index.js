const express = require('express');
const app = express();
const mysql = require('mysql2');

const config = {
    DB_HOST: 'kennyhsedera.alwaysdata.net',
    DB_USER: '327373_kennyh',
    DB_PASSWORD: 'sedera2020',
    DB_NAME:'kennyhsedera_02'
}

const db = mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME
});

app.use('/', (req, res) => {
    res.send('Mandeha');
})

db.connect((err) => {
    if (err) {
        console.log("Connection to the database failed!");
    } else {
        console.log("Connected to the database!");
    }
});

app.listen(2000, ()=>{
    console.log('server running');
})