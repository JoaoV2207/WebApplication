const Sede = require('../model/Sede');

class SedeService {
    async getAllSedes(){
        const result = await Sede.findAll();
        return result;
    }

    async createSede(sede){
        await Sede.create(sede);
    }

    async getSedeById(id){
        const sede = await sede.findByPk(id);
        if (!sede){
            throw new QueryError('Não foi encontrado um produto com ID ${id}')
        }
        return sede;
    }

    async updateSedeInfo(id, reqUserId, reqUserRole, body){
        const sede = await Sede.findByPk(id);
        if (!sede){
            throw new QueryError('Não foi encontrado um produto com ID ${id}')
        }

        const isAdmin = reqUserRole = 'admin';

        if (!isAdmin){
            throw new PermissionError(
                'Você não tem permissão para editar esse produto'
            );
        }

        await sede.update(body);
    }

    async deleteSede(id, reqUserRole, body){
        const sede = await Sede.findByPk(id);
        if (!sede){
            throw new QueryError('Não foi encontrado um produto com ID ${id}')
        }

        const isAdmin = reqUserRole = 'admin';

        if (!isAdmin){
            throw new PermissionError(
                'Você não tem permissão para deletar esse produto'
            );
        }

        await sede.destroy();
    }        
}

module.exports = new SedeService;