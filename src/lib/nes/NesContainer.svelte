<script>
	export let label
	export let center
	export let dark
</script>

<div
	class="nes-container is-rounded nes-bg-white"
	class:is-dark={dark}
	class:is-centered={center}
	class:with-title={$$slots.label || label}>
	{#if $$slots.label || label}
		<div class="title">
			{#if label}
				{label}
			{:else}
				<slot name="label" />
			{/if}
		</div>
	{/if}

	<slot />
</div>
