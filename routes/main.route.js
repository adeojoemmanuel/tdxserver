module.exports = function(app) {
    const controller = require('../controllers/main_controller');
 	app.post('/api/', controller.rootpage);
    app.post('/api/register', controller.register);
}