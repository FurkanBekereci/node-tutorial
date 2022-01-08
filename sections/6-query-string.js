const express = require('express');
const app = express();
const data = require('./data')

app.get('/' , (req,res)=>{
    res.send('<h1>Home page</h1> <a href="/api/products">Products</a>')
});

app.get('/api/products' , (req,res)=>{
    res.json(data.products.map(p =>  ({name : p.name , image: p.image ,price: p.price})))
});

app.get('/api/products/:id' , (req,res)=>{
    const {id} = req.params;
    if(!id) {
        res.send("Write an id"); 
        return;
    }
    const selectedProduct = data.products.find(p => p.id == id);
    if(!selectedProduct) {
        res.status(404).send("Product not found");
        return;
    }
    res.json(selectedProduct);
});
app.get('/api/products/:id/reviews/:reviewId' , (req,res)=>{
    const {id,reviewId} = req.params;
    console.log(req.query);
    console.log('id: ' , id);
    console.log('reviewId: ' , reviewId);
    res.send(`id: ${id}, reviewId: ${reviewId}`)
});

app.get('/api/v1/query' , (req,res)=>{
    const { search , limit } = req.query;
    let sortedProducts = [...data.products];
    if(!!search){
        sortedProducts = sortedProducts.filter(p => p.name.startsWith(search));
    }
    if(!!limit){
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})