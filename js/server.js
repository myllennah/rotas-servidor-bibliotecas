const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('Solicitação realizada')
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');
    
    let caminho = './';
    switch(req.url){
        case '/':
            caminho += 'index.html';
            res.statusCode = 200;
            break;
        case '/home':
            res.statusCode = 301;
            res.setHeader('Location', '/')
            break;
        case '/contato':
            caminho += 'contato.html';
            break;
            res.statusCode = 200;
        case '/cardapio':
            caminho += 'cardapio.html';
            break;
            res.statusCode = 200;
        
        case '/produtos':
            res.statusCode = 301;
            res.setHeader('Location', '/cardapio')
            break;
        default:
            caminho += '404.html';
            res.statusCode = 404;
            break;
    }

fs.readFile(caminho, (err, data) =>{
    if(err){
            console.log(err);
            res.end();
    } else{
            res.end(data);
    }
    });
});
    
server.listen(3000, 'localhost', () =>{
    console.log('Ouvindo requisição na porta 3000')
});
