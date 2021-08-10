const router = require('express').Router();
const LivroService = require('../service/LivroService');

router.post('/', async (req, res) => {
    try {
    const livro = {
        name: req.body.name,
        genre: req.body.name,
    };

    await LivroService.createLivro(livro);

    res.status(201).end();
}catch (error){
    console.log(error);
}
});

router.get('/', async(req, res) => {
    try{
    const users = await LivroService.getAllLivros();
    
    res.status(200).json(livros);
    }catch (error){
    console.log(error);
    }
});

router.get('/livro/:id', async(req, res) =>{
    try {
    const livroId = req.params.id;
    const livro = await LivroService.getLivroById(livroId);
    
    res.status(200).json(livro);
    } catch (error) {
      console.log(error);  
    }
});

router.put('/livro/:id', async (req, res) =>{
    try {
      const livroId = req.params.id;
      await LivroService.UpdateLivro(livroId, req.body);
      
      res.status(204).end();
    } catch (error) {
        console.log(error);
    }
});

router.delete('/livro/:id', async (req, res) =>{
    try {
    const livroId = req.params.id;
    await LivroService.deleteLivro(livroId);

    res.status(204).end();
    } catch (error) {
        console.log(error);
    }
})
module.exports = router;