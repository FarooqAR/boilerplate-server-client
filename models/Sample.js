const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SampleSchema = new Schema({
    message: {
        type: String
    }
});

const SampleModel = mongoose.model('sample_model', SampleSchema);

module.exports = SampleModel;