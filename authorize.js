const authorize = (req, res , next) => {
    const {user} = req.query;
    if(!!user){
        console.log('authorize');
        next();
        return;
    }
    res.status(401).send("Unauthorized!!")

}

module.exports = authorize;