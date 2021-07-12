const app = require('./config/express-config');

app.get('/', (req, res)=>{
res.send('hello world');

})

app.get('/user', (req,res) => {
const pessoa = {
    nome: 'Joao',
    sobrenome: 'Silva'
}
res.json(pessoa);
})

app.post('/mirror', (req, res) => {
    res.json(req.body)
})
app.listen(3000, 'localhost', () => console.log('Servidor Rodando!'))
