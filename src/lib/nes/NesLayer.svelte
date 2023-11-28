<script>
	import { fade } from 'svelte/transition'
	import { cubicIn, cubicOut } from 'svelte/easing'
	const opIn = {
		duration: 300,
		delay: 200,
		easing: cubicOut
	}
	const opOut = {
		duration: 200,
		delay: 0,
		easing: cubicIn
	}
	export let right, left, top, bottom, active, center
</script>

<section
	class:active
	class:bottom
	class:center
	class:left
	class:right
	class:top
	class="nes-layer"
	in:fade={opIn}
	out:fade={opOut}>
	{#if center}
		<slot />
	{:else}
		<article class="nes-content">
			<slot />
		</article>
	{/if}
</section>
