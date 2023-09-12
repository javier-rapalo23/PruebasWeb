const mongoose = require('mongoose')

const User = mongoose.model('User', {
    email: { type: String, require: true  },
    password: { type: String, required: true},
    salt: { type: String, required: true },
})
module.exports = User