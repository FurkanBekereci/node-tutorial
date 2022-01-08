const express = require('express');
const router = express.Router();
const {people} = require('../data');

router.post('/login' , (req,res)=>{
    const { name } = req.body;
    if(people.some(p => p.name == name))
        res.status(200).json({ success : true, message : "Welcome"})
    else 
        res.status(404).json({success : false, message : "User not found!!!"});
});

module.exports = router;