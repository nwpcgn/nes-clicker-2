<script>
	import { createEventDispatcher } from 'svelte'
	import { onMount } from 'svelte'
	import { sleep, getRandInt, Point } from '../../lib'
	const dispatch = createEventDispatcher()
	export let component
	export let dura = 200
	export let open = true
	export let xmax = 100
	export let xmin = 0
	export let x = 0
	export let y = 0
	const setOut = async () => {
		let nx = getRandInt(xmin, xmax)
		let ny = -100
		let newPoint = new Point(x, y)
		let nextPoint = new Point(nx, ny)
		let dis = newPoint.distanceTo(nextPoint)
		dura = Math.floor(dis * 3.5)
		await sleep(10)
		x = Math.floor(nx)
		y = Math.floor(ny)
		await sleep(dura)
		open = false
	}
	onMount(async () => {
		await sleep(200)
		setOut()
	})

	$: dispatch(open ? 'open' : 'close')
</script>

<section
	on:pointerdown={() => (open = false)}
	style="--x: {x}px; --y: {y}px; --dura: {dura}ms;">
	{#if component}
		<svelte:component this={component} animated={true} duration={200} />
	{:else}
		<slot />
	{/if}
</section>

<style>
	section {
		position: absolute;
		left: 0;
		top: 0;
		transform: translate(var(--x), var(--y));
		transition: transform var(--dura, 800ms) ease-in;
	}
</style>
