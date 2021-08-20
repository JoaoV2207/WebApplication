const {body} = require('express-validator');
const { get } = require('../users/controller/user-controller');
const validate = require('./validate');

function getValidations(method) {
    switch (method){
    case 'createProduct':{
        return [
            body('name')
            .exists()
            .withMessage('Você deve enviar um nome para o produto!')
            .notEmpty()
            .withMessage('O nome do produto não pode ficar vazio!'),
            body('description')
            .exists()
            .withMessage('Você deve enviar uma descrição')
            .notEmpty()
            .withMessage('A descrição do produto não pode ficar vazia'),
            body('author')
            .exists()
            .withMessage('Você deve adicionar o nome do autor!')
            .notEmpty()
            .withMessage('O nome do autor não pode ficar vazio!'),
            body('genre')
            .exists()
            .withMessage('Você deve selecionar um gênero!')
            .notEmpty()
            .withMessage('A definição de gênero não pode ficar vazia'),
            body('image')
            .exists()
            .withMessage('O campo de imagem deve estar preenchido!')
            .isURL()
            .withMessage('A imagem deve ser uma URL!'),
            body('price')
            .exists()
            .withMessage('Você deve enviar um preço')
            .isFloat({gt: 0})
            .withMessage('O preço deve ser numérico e positivo'),

        ];
    };
    case 'updateProduct':{
        return [
            body('name')
            .optional()
            .notEmpty()
            .withMessage('O nome do produto não pode ficar vazio'),
            body('description')
            .optional()
            .notEmpty()
            .withMessage('A descrição do produto não pode ficar vazia'),
            body('author')
            .optional()
            .notEmpty()
            .withMessage('O nome do autor não pode ficar vazio!'),
            body ('genre')
            .optional()
            .notEmpty()
            .withMessage('A definição de gênero não pode ficar vazia'),
            body('image')
            .optional()
            .isURL()
            .withMessage('A imagem deve ser uma URL!'),
            body('price')
            .optional()
            .isFloat({gt: 0})
            .withMessage('O preço deve ser numérico e positivo'),

        ];     
    }
    }
}

function productValidate(method){
    const validations = getValidations(method);
    return validate(validations);
}

module.exports = productValidate;