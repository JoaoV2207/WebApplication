const app = require('./config/express-config');

app.get('/', (rec, res)=>{
res.send('hello world');

})

app.listen(3000, 'localhost', () => console.log('Servidor Rodando!'))
