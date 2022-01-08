const express = require('express');
const app = express();
const {people} = require('./data');

// req -> middleware -> res

app.use(express.static('./methods-public'))
// allowing the parsing form body posting...
app.use(express.urlencoded({extended : false}))
// allowing the parse json body data
app.use(express.json());

app.get('/api/people' , (req,res)=>{
    res.status(200).json({ success : true, data : people})
});

app.post('/api/people' , (req,res)=>{
    const { name } = req.body;
    console.log("name : ", name);
    if(people.some(p => p.name == name))
        res.status(201).json({ success : true, person : name})
    else 
        res.status(404).json({success : false, message : "User not found!!!"});
});

app.post('/login' , (req,res)=>{
    const { name } = req.body;
    if(people.some(p => p.name == name))
        res.status(200).json({ success : true, message : "Welcome"})
    else 
        res.status(404).json({success : false, message : "User not found!!!"});
});


app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})