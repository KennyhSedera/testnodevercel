const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send('Mandeha');
})

app.listen(2000, ()=>{
    console.log('server running');
})