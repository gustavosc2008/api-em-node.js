import express from 'express';
import mysql2 from 'mysql2';
const app = express() /*nomeando app para sempre chamar o express atraves de app.get etc.. */
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000') /*nomeando a porta pra 3000(http://localhost:3000)*/
});
const db = mysql2.createConnection ({ /*Criando a conexao entre meu api com o meu banco de dados */
    host: 'localhost',
    user:'root',
    password: '',
    database: 'sistem1', 
});

app.get('/produtos', (req,res) => { /*Dando o diretorio aonde aparecera */
    db.query('SELECT * FROM produtos', (err,results) => { /*selecionando tudo da tabela produtos */
        if(err){
           console.error('Erro na consulta:', err); /*dara um aviso de erro no console */
            res.status(500).send('Erro no servidor');/*Verificara se o status e 500 e enviara uma mensagem de erron no frontend */
        }
        else{
            res.json(results); /*caso de tudo certo dara o resultado da pesquisa */
        }});
});








// app.get('/saudacao', (req, res) => {
//   const nome = req.query.nome; // pega ?nome=Gustavo
//   res.send(`Olá, ${nome || 'visitante'}!`);
// });

// app.get('/praticando') --> mostrar/listar mensagem
// app.post('/praticando') --> criar mensagem /ex: Cadastro de usuário, envio de formulários.
// app.put('/praticando') -->  edita totalmente um recurso existente ou cria um recurso se ele não existir ex: atualizar usuario
// app.delete('/praticando') --> deletar mensagem