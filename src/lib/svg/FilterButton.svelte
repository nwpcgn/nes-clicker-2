<!-- components/FilterButton.svelte -->
<script>
	export let filter = 'all'
	export let filter1 = []
</script>

<div class="flex flex-wrap gap-1 p-4 items-center">
	<button
		class="btn btn-toggle"
		class:active={filter === 'all'}
		on:click={() => (filter = 'all')}>
		<span>All</span>
		<span class="sr-only">All</span>
	</button>
	{#each filter1 as item, i}
		<button
			class="btn btn-toggle"
			class:active={filter === item}
			aria-pressed={filter === item}
			on:click={() => (filter = item)}>
			<span class="visually-hidden">{item}</span>
			<span>{item}</span>
		</button>
	{/each}
</div>
