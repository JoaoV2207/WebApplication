const router = require('express').Router();
const SedeService = require('../service/SedeService');
const {jwtMiddleware} = require ('../../middlewares/auth-middlewares');
const objectFilter = require('../../middlewares/object-filter');
const sedeValidate = require('../../middlewares/sede-validator');

router.get('/', jwtMiddleware, async(req, res, next) => {
    try {
        const sedes = await SedeService.getAllSedes();
        res.status(200).json(sedes);
    } catch (error) {
    next(error);
    }

});

router.post('/', 
    jwtMiddleware,
    objectFilter('body', ['name', 'adress', 'image']),
    sedeValidate('createSede'),
    async(req, res, next) =>{
        try {
            const sede = {
                ...req.body,
                UserId: req.user.id,
            };
            await SedeService.createSede(sede);
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
            const sede = await SedeService.getSedeById(req.params.id);
            res.status(200).json(sede);
        } catch (error) {
            next(error);
        }
    },
);

router.put('/:id',
    jwtMiddleware,
    objectFilter('body', ['name', 'adress', 'image']),
    sedeValidate('updateSede'),
    async (req, res, next) => {
        try {
            const sedeId = req.params.id;
            await SedeService.updateSedeInfo(
                sedeId,
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
            const sedeId = req.params.id;
            await SedeService.deleteSede(
                sedeId,
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