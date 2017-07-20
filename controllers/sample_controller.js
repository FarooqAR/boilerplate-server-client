const SampleModel = require('../models/Sample');

module.exports = {
  get(req, res, next) {
    res.send({message : "Hello World"});
  }
}