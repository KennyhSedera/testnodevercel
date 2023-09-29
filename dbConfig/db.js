
const Sequelize = require('sequelize');

const config = {
    DB_USER: '327373_kennyh',
    DB_PASSWORD: 'sedera2020',
    DB_NAME: 'kennyhsedera_02',
    Option: {
        host: 'mysql-kennyhsedera.alwaysdata.net',
        dialect: 'mysql',
        port: 3306,
    }
}

// Connexion a la DB
exports.sequelize = new Sequelize(
    config.DB_NAME,
    config.DB_USER,
    config.DB_PASSWORD,
    config.Option
);