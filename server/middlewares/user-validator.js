const {body} = require('express-validator');
const validate = require('./validate');

function getValidations(method){
    switch (method){
        case 'login': {
            return [
                body('email')
                    .exists()
                    .withMessage('O campo de e-mail deve estar preenchido!')
                    .isEmail()
                    .withMessage('O e-mail inserido não é válido!'),
                body('password')
                    .exists()
                    .withMessage('Você deve digitar uma senha!')
                    .notEmpty()
                    .withMessage('O campo de senha deve estar preenchido!'),
            ];
        };
        case 'createUser': {
            return [
                body('name')
                    .exists()
                    .withMessage('Você deve inserir um nome!')
                    .isAlpha('pt-BR', {ignore: ' '})
                    .withMessage('O nome só pode conter letras!'),
                body('email')
                    .exists()
                    .withMessage('Você deve inserir um e-mail!')
                    .isEmail()
                    .withMessage('O e-mail inserido não é válido!'),
                body('password')
                    .exists()
                    .withMessage('Você deve inserir uma senha!')
                    .isStrongPassword()
                    .withMessage('Sua senha deve conter pelo menos 8 caracteres, com pelo meonos'+
                    'um número, uma letra maiúscula e um caracter especial!'),
                body('image')
                    .exists()
                    .withMessage('Você deve inserir uma imagem!')
                    .isURL()
                    .withMessage('A imagem deve ser uma URL'),
            ];
        };
        case 'updateUser': {
            return [
                body('name')
                .optional()
                .isAlpha('pt-BR', {ignore: ' '})
                .withMessage('O nome só pode conter letras!'),
            body('email')
                .optional()
                .isEmail()
                .withMessage('O e-mail inserido não é válido!'),
            body('image')
                .optional()
                .isURL()
                .withMessage('A imagem deve ser uma URL'),
            ];
        };
    }
}

function userValidate(method){
    const validations = getValidations(method)
    return validate(validations);
}
module.exports = userValidate;