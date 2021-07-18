import models from '../models';

export default {

    add: async (req, res, next) => {
        try {
            const reg = await models.Clasification.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },

    update: async (req, res, next) => {
        try {
            const reg = await models.Clasification.findByIdAndUpdate(
                {_id:req.body._id}, 
                {name: req.body.name} 
            )
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },

    list: async (req, res, next) => {
        try {
            const reg = await models.Clasification.find()
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },

    delete: async (req, res, next) => {
        try {
            const reg = await models.Clasification.findByIdAndDelete({_id: req.query._id})
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },

    onlyClasification: async (req, res, next) => {
        try {
            const reg = await models.Clasification.findById({
                _id: req.query._id,
            });
            if (!reg) {
                res.status(404).send({
                    message: "El registro no existe",
            });
            } else {
                res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
}