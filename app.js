const express = require('express');
const app = express();
const peopleRouter = require('./routes/people');
const authRouter = require('./routes/auth');
// req -> middleware -> res

app.use(express.static('./methods-public'));
// allowing the parsing form body posting...
app.use(express.urlencoded({extended : false}));
// allowing the parse json body data
app.use(express.json());

app.use('/api/people', peopleRouter);
app.use('/api/auth' , authRouter);



app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})