<script>
	// import * as transitions from 'svelte/transition'
	export let center
	export let blank
	export let out = ''
	export let active
	// export let animation = 'fade'
	// export let optionsIn = { duration: 400, delay: 200 }
	// export let optionsOut = { duration: 400 }
	// let _animation = transitions[animation]
	// $: _animation =
	// 	typeof animation === 'function' ? animation : transitions[animation]
</script>

<section class="layer {out}" class:active class:center>
	<!-- 	out:_animation|local={optionsIn}
	in:_animation|local={optionsOut} -->
	{#if $$slots.top}
		<header
			class="bg-blue-500 text-white shadow sticky top-0 left-0 w-full z-10">
			<div class="page flex items-center"><slot name="top" /></div>
		</header>
	{/if}

	{#if center}
		<div><slot /></div>
	{:else if blank}
		<slot />
	{:else}
		<article class="content fadeIn">
			<slot />
		</article>
	{/if}
</section>

<style>
	section.center {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
