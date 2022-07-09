import db from 'mongoose'
const Schema = db.Schema

const userSchema = new Schema({
  username: String,
  password: String
})

export default db.model('User', userSchema)