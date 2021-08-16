const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:String,
    userName:String,
    insertDate:{
        type:Date,
        default:Date.now()
    },
    updateDate:{
        type:Date,
    },
    medicine:[{ type: Schema.Types.ObjectId, ref: 'MedicineModel' }]

});

 module.exports =  mongoose.model('UserModel', userSchema );
