const mongooose = require('mongoose');
const jwt = require('jsonwebtoken');
const userSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpasword: {
        type: String,
        required: true

    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }]


});

const User = mongooose.model('USERS', userSchema);

// generating token 
userSchema.methods.generateAuthToken = async function () {
    try {
        const token = await jwt.sign({ _id: this._id },"MYNAMEISDEBAHSISHJENATHEDEVELOPER")
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}

module.exports = User;