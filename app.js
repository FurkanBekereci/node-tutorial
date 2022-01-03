const http = require('http');

const server = http.createServer((req,res)=> {
    const url = req.url;
    switch (url) {
        case '/':
            res.writeHead(200,{'content-type':'text/html'});
            res.write('<h1>Home page</h1>');
            res.end();
            break;
        case '/about':
            res.writeHead(200,{'content-type':'text/html'});
            res.write('<h1>About page</h1>');
            res.end();
            break;
        default:
            res.writeHead(404,{'content-type':'text/html'});
            res.write('<h1>Page not found</h1>');
            res.end();
            break;
    }

}).listen(5000);

// Video kalınan yer. 4:32:02