const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController');
const isAuthenController = require('./authen/isAuthenController')
const CameraController = require('./controllers/CameraController')

module.exports = (app) => {
    app.post('/user', UserController.create)
    app.put('/user/:userId', UserController.put)
    app.delete('/user/:userId', UserController.remove)
    app.get('/user/:userId', UserController.show)
    app.get('/users', isAuthenController, UserController.index)
    
    app.post('/login', UserAuthenController.login)

    app.post('/camera', CameraController.create)
    app.put('/camera/:cameraId', CameraController.put)
    app.delete('/camera/:cameraId', CameraController.remove)
    app.get('/camera/:cameraId', CameraController.show)
    app.get('/cameras', CameraController.index)
}