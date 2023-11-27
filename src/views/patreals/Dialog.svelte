<script>
	import { createEventDispatcher } from 'svelte'
	export let open = true
	export let component = null
	export let text = null
	export let html = null

	const dispatch = createEventDispatcher()
	$: dispatch(open ? 'open' : 'close')
</script>

<div class="layer bg-black bg-opacity-70" on:pointerup={() => (open = false)} />

<div
	class="absolute w-full max-w-md bg-white border-2 rounded flex- flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
	{#if component}
		<svelte:component this={component} />
	{/if}

	{#if text}
		<div class="p-4">
			{text}
		</div>
	{/if}
	{#if html}
		{@html html}
	{/if}

	<div class="p-4 text-right">
		<button class="btn" on:click={() => (open = false)}>Close</button>
	</div>
</div>
