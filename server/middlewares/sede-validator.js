const {body} = require('express-validator');
const { get } = require('../users/controller/user-controller');
const validate = require('./validate');

function getValidations(method) {
    switch (method){
    case 'createSede':{
        return [
            body('name')
            .exists()
            .withMessage('Você deve enviar um nome para a sede')
            .notEmpty()
            .withMessage('O nome da sede não pode ficar vazio!'),
            body('adress')
            .exists()
            .withMessage('Você deve enviar uma descrição')
            .notEmpty()
            .withMessage('A descrição do produto não pode ficar vazia'),
            body('image')
            .exists()
            .withMessage('Você deve adicionar o nome do autor!')
            .notEmpty()
            .withMessage('O nome do autor não pode ficar vazio!'),
            
        ];
    };
    case 'uptdateSede':{
        return [
            body('name')
            .optional()
            .notEmpty()
            .withMessage('O nome do produto não pode ficar vazio'),
            body('adress')
            .optional()
            .notEmpty()
            .withMessage('A descrição do produto não pode ficar vazia'),
            body('image')
            .optional()
            .notEmpty()
            .withMessage('O nome do autor não pode ficar vazio!'),
            
        ];     
    }
    }
}

function sedeValidate(method){
    const validations = getValidations(method);
    return validate(validations);
}

module.exports = sedeValidate;