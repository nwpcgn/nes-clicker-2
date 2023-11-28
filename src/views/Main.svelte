<script>
	import { _clicker } from '../lib/nes'
	import { AniLayer } from '../lib/animation'
	import { path } from 'elegua'
	import Game from './Game.svelte'
	import Start from './Start.svelte'
	let frame, width, height
</script>

<!-- <a href="https://nostalgic-css.github.io/NES.css/"><h1><i class="snes-jp-logo brand-logo" />NES.css</h1></a> -->

<header
	class="nes-app-bar"
	style="--nes-page-padding: 0 1rem; --nes-page-gap: 0.1rem;">
	<nav class="nes-page">
		<a href="/">
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
	{#if $path.includes('/game')}
		<Game bind:clicker={$_clicker} />
		<AniLayer bind:frame bind:fheight={height} bind:fwidth={width} />
	{:else}
		<Start />
	{/if}
</main>
