import models from '../models';

export default {

    add: async (req, res, next) => {
        try {
            const reg = await models.Movies.create(req.body);
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
            console.log(req.body)
            const reg = await models.Movies.findByIdAndUpdate(
                {
                    _id: req.body._id
                }, 
                {
                    name: req.body.name,
                    director: req.body.director,
                    clasification: req.body.clasification
                } 
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
      const reg = await models.Movies.find()
        .populate("clasification", {
          name: 1,
        })
        .sort({
          createdAt: -1,
        });
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
            const reg = await models.Movies.findByIdAndDelete({_id: req.query._id})
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    //Search for movie
    onlyMovie: async (req, res, next) => {
        try {
            const reg = await models.Movies.findById({
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