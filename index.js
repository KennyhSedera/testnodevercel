const express = require('express');
const { sequelize } = require('./dbConfig/db');
const route = require('./routes/routes');
const app = express();
const PORT = 3300;

sequelize.authenticate()
.then(() => {
    console.log('Connection a la base de donnees avec succees !');
}).catch((err) => {
    console.log(err);
});

app.use(route)


app.listen(PORT, () => {
    console.log(`Serveur running sur le port: http://localhost:${PORT}`);
})