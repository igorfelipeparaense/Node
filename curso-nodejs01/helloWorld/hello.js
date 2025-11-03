const express = require('express');
const server = express();

server.use(express.json());

// http://localhost:300/hello?nome=Felipe&idade=29
// Query params = ?nome=Felipe&idade=29
server.get('/hello', (req, res) => {
    const {nome, idade} = req.query;
    
    return res.json({
        title: 'Hello World',
        message: `Olá ${nome} tudo bem?`,
        idade: idade
    });
});

// http://localhost:300/hello/29
// Route params = /hello/:nome
server.get('/hello/:nome', (req, res) => {
    const nome = req.params.nome;

    return res.json({
        title: 'Hello World',
        message: `Olá ${nome} tudo bem?`
    });
});

server.listen(3000, () => console.log(`Server running at 3000`));