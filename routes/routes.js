const SampleController = require('../controllers/sample_controller');


module.exports = (app) => {
    app.get('/api', SampleController.get);
}