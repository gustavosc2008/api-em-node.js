import express from 'express';
import mysql2 from 'mysql2';

const app = express();

app.use(express.json()); // habilita leitura de JSON no corpo da requisição


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sistem1',
});

app.get('/produtos', (req, res) => {
    db.query('SELECT * FROM produtos', (err, results) => {
        if (err) {
            console.error('Erro na consulta:', err);
            res.status(500).send('Erro no servidor');
        } else {
            res.json(results);
        }
    });
});
app.get('/produtos/nomes', (req, res) => {
    db.query('SELECT nome, peso FROM produtos', (err, results) => {
        if (err) {
            console.error('Erro na consulta', err);
            res.status(500).send('Erro no servidor');
        } else {
            // título
            let resposta = "Nome e peso dos produtos\n";

            // cada produto em uma linha
            results.forEach(produto => {
                resposta += `${produto.nome} - ${produto.peso}\n`;
            });

            res.send(resposta);
        }
    });
});


