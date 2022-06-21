import db from 'mongoose'
const Schema = db.Schema

const postSchema = new Schema({
  title: String,
  body: String,
})

export default db.model('Post', postSchema)