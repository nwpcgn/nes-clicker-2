<script>
	export let center
	export let blank
	export let small
	export let nes
	export let label
</script>

<div
	class={small ? 'page-sm' : 'page'}
	class:blank
	class:center
	{...$$restProps}>
	{#if nes}
		<div class="nes-container is-rounded" class:with-title={label}>
			{#if label}
				<p class="title">{label}</p>
			{/if}
			<slot />
		</div>
	{:else}
		<slot />
	{/if}
</div>
