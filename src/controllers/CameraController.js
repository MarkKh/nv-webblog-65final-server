const { Camera } = require('../models')
module.exports = {
    // get all camera
    async index(req, res) {
        try {
            const cameras = await Camera.findAll()
            res.send(cameras)
        } catch (err) {
            res.status(500).send({
                error: 'The cameras information was incorrect'
            })
        }
    },
    // create camera
    async create(req, res) {
        console.log(JSON.stringify(req.body))
        try {
            const camera = await Camera.create(req.body)
            res.send(camera.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create camera incorrect'
            })
        }
    },
    // edit camera
    async put(req, res) {
        try {
            await Camera.update(req.body, {
                where: {
                    id: req.params.cameraId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update camera incorrect'
            })
        }
    },
    
// delete camera
async remove(req, res) {
        try {
            const camera = await Camera.findOne({
                where: {
                    id: req.params.cameraId
                }
            })
            if (!camera) {
                return res.status(403).send({
                    error: 'The camera information was incorrect'
                })
            }
            await camera.destroy()
            res.send(camera)
        } catch (err) {
            res.status(500).send({
                error: 'The camera information was incorrect'
            })
        }
    },
    // get camera by id
    async show(req, res) {
        try {
            const camera = await Camera.findByPk(req.params.cameraId)
            res.send(camera)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The camera information was incorrect'
            })
        }
    }
}
