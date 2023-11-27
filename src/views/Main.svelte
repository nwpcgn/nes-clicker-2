<script>
	import { path } from 'elegua'
	import { _clicker } from './clicker/clicker'
	import Clicker from './Clicker.svelte'
	import AniLayer from './clicker/AniLayer.svelte'
	import PageStart from './PageStart.svelte'
	let step = 0
	let frame, width, height
</script>

<!-- <a href="https://nostalgic-css.github.io/NES.css/"><h1><i class="snes-jp-logo brand-logo" />NES.css</h1></a> -->

<header class="app-bar">
	<nav class="page blank">
		<a
			href="https://nostalgic-css.github.io/NES.css/"
			target="_blank"
			rel="noopener">
			<h1>
				<i class="snes-jp-logo brand-logo" />
				NES.css
			</h1>
		</a>
		<p>NES-style CSS Framework.</p>
	</nav>
</header>
<main
	class="main"
	bind:this={frame}
	bind:clientHeight={height}
	bind:clientWidth={width}>
	{#if $path === '/game'}
		<Clicker bind:step bind:clicker={$_clicker} />

		<AniLayer bind:frame bind:fheight={height} bind:fwidth={width} />
	{:else}
		<PageStart />
	{/if}
</main>

<!-- <style>
	.app-bar button {
		background-color: transparent;
		border-color: transparent;
		margin: 0;
	}
	.app-bar button:focus {
		outline: 0;
	}
</style> -->
