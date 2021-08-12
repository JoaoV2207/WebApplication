const router = require('express').Router();
const {
    loginMilddleware,
    notLoggedIn,
    jwtMiddleware,
    checkRole,
} = require('../../middlewares/auth-middlewares');
const ProductService = require ('../service/ProductService');

router.get('/', jwtMiddleware, async(req, res, next) =>{
    try {
        const products = await ProductService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
    next(error);
    }

});

router.post('/');

router.get('/:id');

router.put('/:id');

router.delete('/:id')