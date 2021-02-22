const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const schema = mongoose.Schema;

const userSchema = schema({
    local: {
        email: {
            type: 'string',
            required: true,
            unique: true,
            maxLength:[140, 'Email trop long'],
            minLength:[1, 'Email trop court !'],
            required: [true, 'Champ requis']
        },
        password: {
            type: 'string',
            maxLength:[140, 'Mot de passe trop long'],
            minLength:[1, 'Mot de passe trop court !'],
            required: [true, 'Champ requis']
        },
    },
    username: {
        type: String,
        maxLength:[140, 'Username trop long'],
        minLength:[1, 'Username trop court !'],
        required: [true, 'Champ requis']
    }
});

userSchema.statics.hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }catch(e) {
        throw e
    }
}

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.local.password);
}

const User = mongoose.model('user', userSchema);

module.exports = User;