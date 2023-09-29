const express = require('express');
const app = express();

app.use('/', () => {
    console.log('Mandeha');
})

app.listen(2000, ()=>{
    console.log('server running');
})