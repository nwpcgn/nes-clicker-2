<script>
	export let back = false
</script>

<header class="bar bar-nav">
	{#if back}
		<button
			on:click={() => history.back()}
			class="btn btn-link btn-nav pull-left">
			<span class="icon icon-left-nav" />
			Back
		</button>
	{/if}
	<h1 class="title"><slot /></h1>
</header>
