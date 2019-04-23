const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const CalSchema = new Schema({
  user: {type:ObjectId, ref:'User'} ,
  project:  {type:ObjectId, ref:'Project'} ,
  week: {type:Number, min:0, max:52},
  time: {type: Number, min: 0, max: 7},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


const Calendar = mongoose.model('Calendar', CalSchema);
module.exports = Calendar;
