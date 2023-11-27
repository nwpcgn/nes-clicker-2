<script>
	import CityBg from './CityBg.svelte'
	import CityItem from './CityItem.svelte'
	export let data = []
	export let background = {
		fill: 'none',
		stroke: '#333',
		strokeWidth: 1
	}
	let x, y
	const showInfo = (e) => {
		console.log('EVENT', e.detail)
	}
</script>

<div class="city-wrapper" style="--mw: 100%; --mh: 100%;">
	<CityBg {...background}>
		{#each data as item (item.id)}
			<CityItem {...item} on:click={showInfo} />
		{/each}
	</CityBg>
</div>

<svelte:window bind:innerWidth={x} bind:innerHeight={y} />

<style>
	.city-wrapper {
		width: 100%;
		height: auto;
		max-width: var(--mw, 90%);
		max-height: var(--mh, 90%);
		aspect-ratio: 5 / 3;
		margin: auto auto;
		display: inline-flex;
		overflow: hidden;
	}
</style>
