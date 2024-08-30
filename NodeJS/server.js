import http from 'http';

const server = http.createServer(function (req, res) {
    console.log("Hello from my first server!!!");

    console.log(req.url);

    res.writeHead(200, {
        "Content-Type": "text/html",
    })
    res.write("<h1>Hello from my first NodeJS server!!!</h1>");
    res.end();
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}...`)
});

