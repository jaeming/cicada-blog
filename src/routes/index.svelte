<script lang="ts">
	export let posts: { title: string; body: string; _id: string }[];
	export let order: 'asc' | 'desc' = 'desc';

	$: sort = {
		value: order === 'desc' ? 'asc' : 'desc',
		description: order === 'desc' ? 'sort by older' : 'sort by newer'
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="demo app" />
</svelte:head>

<main class="posts">
	<h2 class="title">
		posts
		<form action={`/`} method="get">
			<input type="hidden" name="order" value={sort.value} />
			<input type="submit" value={sort.description} />
		</form>
	</h2>
	{#each posts as post}
		<div class="card">
			<h3>{post.title}<small>&nbsp;: {post._id}</small></h3>
			<p>{post.body}</p>
		</div>
	{/each}
</main>

<form action="/" method="post">
	<input name="title" placeholder="title" />
	<input name="body" placeholder="body" />
	<input type="submit" value="save" />
</form>

<style lang="scss">
	.posts {
		padding: 3em;
		.title {
			color: tomato;
			font-weight: 700;
			font-size: 2em;
			text-transform: uppercase;
		}
		.card {
			padding: 1em;
			background: #fff;
			border-radius: 0.3em;
			margin: 1em 0;
			h3 {
				small {
					color: #ececec;
					letter-spacing: 0.9px;
				}
			}
		}
	}
</style>
