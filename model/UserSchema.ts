import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    contact: {
        type: String,
        unique: [true, 'Contact Alredy Exists!!!'],
        required: [true, 'Contact is required!!!']
    },
    email: {
        type: String,
        unique: [true, 'Email Alredy Exists!!!'],
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: true,  
    }
})

const User = models.User || model('User', UserSchema)

export default User;