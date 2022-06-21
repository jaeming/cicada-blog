import Post from '$lib/models/post';

const SortOptions = { asc: 'asc', desc: 'desc' };

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ url }) {
	const order: 'asc' | 'desc' = SortOptions[url.searchParams.get('order')] || 'desc';
	const posts = await Post.find().sort({ _id: order });

	if (posts) {
		return {
			body: { posts, order }
		};
	}

	return {
		status: 404
	};
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
	const data = await request.formData();
	console.log('form submitted');
	let post = new Post({ title: data.get('title'), body: data.get('body') });
	await post.save();

	return { status: 201 };
}
