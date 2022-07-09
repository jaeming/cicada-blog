import mongoose from 'mongoose'

export const init = async () => {
	await mongoose.connect('mongodb://127.0.0.1:27017/test', {
		serverSelectionTimeoutMS: 5000 // Defaults to 30000 (30 seconds)
	})
}
