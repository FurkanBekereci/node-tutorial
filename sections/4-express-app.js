const express = require('express');
const path = require('path');

const app = express();

// setup static and middleware
app.use(express.static('./public'));

//İf you want to set up all is for static comment this block and copy index html to public folder(folder you defined as a static by express.static function)
// app.get('/',(req,res) => {
//    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//    adding to static assets
//    SSR
// })

app.all('*',(req,res) => {
    res.status(404).send('resource not found!!')
})

app.listen(5000,() => {
    console.log("Server is listening on port 5000...");
});
