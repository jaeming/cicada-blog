<script>
	export let users = []
</script>

<h3>users</h3>

{#each users as user}
	<p>
		{user.username}
		{user.password}
		{user._id}
	</p>
{/each}
