const Livro = require("../model/Livro");

class LivroService {
    async createLivro(livro){
        await Livro.create(livro);
    }

    async getAllLivros(){
        return await Livro.findAll({raw: true});
    }

    async getLivroById(id){
        return await Livro.findByPk(id, {raw: true});

    }

    async updateLivro(id, body){
        await Livro.update(body, {where:{id: id}});
    }

    async deleteLivro(id){
        await Livro.destroy({where:{id: id}});
    }
}

module.exports = new LivroService;