import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    car: String,
    city: String,
    email: String,
    first_name: String,
    gender: String,
    id: Number,
    income: String,
    last_name: String,
    phone_price: String,
    quote: String
})

const User = mongoose.model('users', userSchema)
export default User