const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 8080;

http.createServer(function(req, res) {
    res.writeHeader(200, {'content-type':'text/html'});
    
    let url = req.url;
    console.log(url);

    if (url === '/') {
        fs.readFile('./index.html', function(err, html) {
            if (err) {
                throw err;
            }
            res.write(html);
            res.end();
        });
    }
    else if (url === '/about') {
        fs.readFile('./about.html', function(err, html) {
            if (err) {
                throw err;
            }
            res.write(html);
            res.end();
        });
    }
    else if (url === '/contact-me') {
        fs.readFile('./contact-me.html', function(err, html) {
            if (err) {
                throw err;
            }
            res.write(html);
            res.end();
        });
    }
    else {
        fs.readFile('./404.html', function(err, html) {
            if (err) {
                throw err;
            }
            res.write(html);
            res.end();
        });
    }
}).listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

