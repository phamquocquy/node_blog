const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, default: 'pv.quy', required: true},
  description: { type: String, default: 'khóa học'},
  image: { type: String, default: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png'},
  videoId: { type: String, default: 'lpbl2qQXbDo', required: true},
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', Course);