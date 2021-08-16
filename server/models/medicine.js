const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
    medicineName:String,
    medicineCode:String,
    openDate:{
        type:Date,
        default:Date.now()
    },
    expairDate:{
        type:Date,
    },
    severalDays:Number,
    severalTimes:Number,
    remarks:String,
    user:[{ type: Schema.Types.ObjectId, ref: 'UserModel' }]

});

module.exports = mongoose.model('MedicineModel', medicineSchema );
