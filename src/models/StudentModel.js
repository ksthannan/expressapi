const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    Name:String,
    Roll:{
        type: Number,
        min: [6, "Min 6 and Max 12, your provided value is {VALUE}"],
        max:[12, "Min 6 and Max 12, your provided value is {VALUE}"]
    },
    Class:String,
    Mobile: {
        type: String,
        validate: {
        validator: function(v) {
            return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/
            .test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'User phone number required']
    },
    Remarks:String
});
const StudentModel = mongoose.model('students', DataSchema);
module.exports = StudentModel;