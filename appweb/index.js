const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send('hello');
});

app.post('/dosave', (req, res) => {
    console.log("os dados recebidos do formulário são:");
    console.log(req.body);
    res.send("<h1>Sucesso!</h1><a href='index.html'>voltar</a>");
});

app.post('/adivinha', (req, res) => {
    console.log("os dados recebidos do formulário são:");
    console.log(req.body);
    res.send("<h1>Sucesso!</h1><a href='numero.html'>voltar</a>");
});

app.get('/convidados', (req, res) => {
    let convidados = [
        {nome: 'Socorro Feirante' },
        {nome: 'Miriam da Mary Key'},
        {nome: 'Silvan da Silva Feitosa'},
    ];

    res.send(convidados);
});

app.listen(3000);

console.log("app online");