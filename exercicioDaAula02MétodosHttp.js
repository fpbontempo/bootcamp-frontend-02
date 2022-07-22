const express = require('express');
const produtos = require('./products');

const app = express();
//app.use(express.json);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/produtos', (req, res) => {

    res.status(200).json(produtos);
});

app.listen(3000, () => console.log('Servidor em execução'));

/**
Crie um endpoint que use o método:
- POST para adicionar 4 produtos, de uma vez.
- PUT para modificar um desses produtos.
- DELETE para deletar um desses produtos.
- GET para verificar os que foram mantidos.
*/
