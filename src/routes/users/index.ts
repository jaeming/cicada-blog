import User from '$lib/models/user'

export async function get() {
	const users = await User.find()
	return {
		body: {
			users
		}
	}
}
