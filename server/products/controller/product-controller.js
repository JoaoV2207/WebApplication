const router = require('express').Router();
const ProductService = require('../service/ProductService');
const {jwtMiddleware} = require ('../../middlewares/auth-middlewares');
const objectFilter = require('../../middlewares/object-filter');
const productValidate = require('../../middlewares/product-validator');

router.get('/', jwtMiddleware, async(req, res, next) => {
    try {
        const products = await ProductService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
    next(error);
    }

});

router.post('/', 
    jwtMiddleware,
    objectFilter('body', ['name', 'description', 'author', 'genre', 'image', 'price']),
    productValidate('createProduct'),
    async(req, res, next) =>{
        try {
            const product = {
                ...req.body,
                UserId: req.user.id,
            };
            await ProductService.createProduct(product);
            res.status(201).end();
        } catch (error) {
            next(error);
        }
    },
);   

router.get('/:id',
    jwtMiddleware,
    async(req, res, next) =>{
        try {
            const product = await ProductService.getProductById(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    },
);

router.put('/:id',
    jwtMiddleware,
    objectFilter('body', ['name', 'description', 'author', 'genre', 'image', 'price']),
    productValidate('updateProduct'),
    async (req, res, next) => {
        try {
            const productId = req.params.id;
            await ProductService.updateProductInfo(
                productId,
                req.user.id,
                req.user.role,
                req.body,
            );

            res.status(204).end();
        } catch(error) {
            next(error);
        }
    }
    );

router.delete('/:id',
    jwtMiddleware,
    async (req, res, next) => {
        try {
            const productId = req.params.id;
            await ProductService.deleteProduct(
                productId,
                req.user.id,
                req.user.role,
            );

            res.status(204).end();
        } catch (error) {
                next(error);
        }
    }
);

module.exports = router;