const Sequelize = require('sequelize');
const { sequelize } = require('../dbConfig/db');

const menu = sequelize.define('menu', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        libelle: {
            type: Sequelize.STRING,
        },
        quantite: {
            type: Sequelize.INTEGER
        },
        prix: {
            type: Sequelize.INTEGER
        }
    },
)
module.exports = menu;