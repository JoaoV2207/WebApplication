const Product = require('../model/Product');

class ProductService {
    async getAllProducts(){
        const result = await Product.findAll();
        return result;
    }

    async createProduct(product){
        await Product.create(product);
    }

    async getProductById(id){
        const product = await Product.findByPk(id);
        if (!product){
            throw new QueryError('Não foi encontrado um produto com ID ${id}')
        }
        return product;
    }

    async updateProductInfo(id, reqUserRole, body){
        const product = await Product.findByPk(id);
        if (!product){
            throw new QueryError('Não foi encontrado um produto com ID ${id}')
        }

        const isAdmin = reqUserRole = 'admin';

        if (!isAdmin){
            throw new PermissionError(
                'Você não tem permissão para editar esse produto'
            );
        }

        await product.update(body);
    }

    async deleteProduct(id, reqUserRole, body){
        const product = await Product.findByPk(id);
        if (!product){
            throw new QueryError('Não foi encontrado um produto com ID ${id}')
        }

        const isAdmin = reqUserRole = 'admin';

        if (!isAdmin){
            throw new PermissionError(
                'Você não tem permissão para deletar esse produto'
            );
        }

        await product.delete();
    }        
}

module.exports = new ProductService;