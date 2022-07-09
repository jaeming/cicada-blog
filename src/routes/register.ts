import User from '$lib/models/user'
import {Auth} from '$lib/auth'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
	const data = await request.formData()
	const user = new User({ username: data.get('username'), password: await Auth.salt(data.get('password')) })
	await user.save()

	return { status: 201 };
}