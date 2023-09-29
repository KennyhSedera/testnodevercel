const menu = require("../model/test");

exports.getAll = (req, res)=>{
    menu.findAll()
    .then((result) => {
        res.send({data:result})
    }).catch((err) => {
        res.send({error:err.message})
    });
}