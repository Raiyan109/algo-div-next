import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must Provide a user name']
    },
    email: {
        type: String,
        required: [true, 'Must Provide a user email']
    },
    password: {
        type: String,
        required: [true, 'Must Provide a user password']
    }
}, { timestaps: true })

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User