import mongoose from "mongoose";

const userSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 12
    },
    email: {
        type: String,
        requried: true,
        unique: 32
    },
    password: {
        type: String,
        requried: true,
    },
    about: {
        type: String,
    },
    role: {
        type: Number,
        default: 0
    },
    salt: String,   //encryped the password//
    history: {
        type: Array,
        default: []
    }
},
{
    timestamps: true
}
);

// userSchema.methods.matchPassword = async function (enterPassword) {
//     return password
// }

const User = mongoose.model('User', userSchema);

export default User;