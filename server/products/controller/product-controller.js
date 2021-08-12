const router = require('express').Router();
const {
    loginMilddleware,
    notLoggedIn,
    jwtMiddleware,
    checkRole,
} = require('../../middlewares/auth-middlewares');
const productValidate = require('../../middlewares/product-validator');
const ProductService = require ('../service/ProductService');

router.get('/', jwtMiddleware, async(req, res, next) =>{
    try {
        const products = await ProductService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
    next(error);
    }

});

router.post('/', 
    jwtMiddleware,
    requestFilter('body', ['name', 'description', 'author', 'genre', 'image', 'price']),
    productValidate('createProduct'),
    async(req, res, next) =>{
        try {
            const product = {
                ...req.body,
                UserID: req.user.id,
            };
            await ProductService.createProduct(product);
            req.status(201).end();
        } catch (error) {
            next(error);
        }
    }
);   

router.get('/:id',
    jwtMiddleware,
    async(req, req, next) =>{
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
    requestFilter('body', ['name', 'description', 'image', 'price', 'condition']),
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
        } catch (error) {
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