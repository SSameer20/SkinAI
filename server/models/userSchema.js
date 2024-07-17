const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    email: {
        type : String,
        require : true,
        index : { unique : true}
    },
    username : {
        type: String,
        require : true
    },
    password:{
        type: String,
        require: true
    },
    phone : {
        type: Number
    },
}, {
    timestamps: true
})
const User = mongoose.model('User', userSchema);

module.exports = User;