const express = require('express');
const server = express();
server.use(express.json()); // faz com que o express entenda JSON
const users = []; // As informações ficaram armazenadas dentro deste array []

server.get('/users', (req, res) => {
return res.json(users);
}) // rota para listar todos os geeks

server.get('/users/:index', (req, res) => {
const { index } = req.params;
nameUser = users[index];
return res.json(nameUser);
})

server.post('/users', (req, res) => {
const { name } = req.body; // assim esperamos buscar o name informado dentro do body da requisição
users.push(name);

return res.json(users); // retorna a informação da variável geeks

})

server.put('/users/:index', (req, res) => {
const { index } = req.params; // recupera o index com os dados
const { name } = req.body;

users[index] = name; // sobrepõe o index obtido na rota de acordo com o novo valor

return res.json(users);
}); // retorna novamente os geeks atualizados após o update
       
    
server.delete('/users/:index', (req, res) => {
const { index } = req.params; // recupera o index com os dados

users.splice(index, 1); // percorre o vetor até o index selecionado e deleta uma posição no array

return res.send();
}); // retorna os dados após exclusão

server.listen(3000); // faz com que o servidor seja executado na porta 3000 do seu localhost:3000