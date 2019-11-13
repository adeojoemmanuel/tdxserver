const path = require('path');
module.exports = function(app) {
    const controller = require('../controllers/main_controller');
 	app.post('/api/', controller.rootpage);
    app.post('/api/register', controller.regisistration);
    app.post('/api/productdetails', controller.pdetail);
    app.post('/api/gridlist', controller.gridlist);
    app.post('/api/listlist', controller.listlist);
    app.post('/api/postad', controller.postad);
}

