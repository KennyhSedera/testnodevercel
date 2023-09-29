const express = require('express');
const app = express();
const mysql = require('mysql2');
const Sequelize = require('sequelize');
const PORT = 3500;

const config = {
    // DB_HOST: 'kennyhsedera.alwaysdata.net',
    DB_USER: '327373_kennyh',
    DB_PASSWORD: 'sedera2020',
    DB_NAME: 'kennyhsedera_02',
    Option: {
        host: 'kennyhsedera.alwaysdata.net',
        dialect: 'mysql',
    }
}

// Connexion a la DB
const sequelize = new Sequelize(
    config.DB_NAME,
    config.DB_USER,
    config.DB_PASSWORD,
    config.Option
);

// initialize();

try {
    sequelize.authenticate()
    console.log('Connection a la base de donnees avec succees !');
} catch (err) {
    console.log('error');
}


// const db = mysql.createConnection({
//     host: config.DB_HOST,
//     user: config.DB_USER,
//     password: config.DB_PASSWORD,
//     database: config.DB_NAME
// });

// db.connect((err) => {
//     if (err) {
//         console.log("Connection to the database failed!");
//     } else {
//         console.log("Connected to the database!");
//     }
// });

app.use('/', (req, res) => {
    res.send('Mandeha');
})


sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Serveur running sur le port: http://localhost:${PORT}`);
    })
})