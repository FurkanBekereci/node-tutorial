const {people} = require('../data');

const getPeople = (req,res)=>{
    res.status(200).json({ success : true, data : people})
}

const createPerson = (req,res)=>{
    const { name } = req.body;
    if(people.some(p => p.name == name))
        res.status(201).json({ success : true, person : name})
    else 
        res.status(404).json({success : false, message : "User not found!!!"});
}

module.exports = {getPeople , createPerson}