<script>
	import { createEventDispatcher } from 'svelte'
	import {
		_clicker,
		formatNumber,
		formatMoney,
		getRandInt,
		NesContainer,
		NesLayer,
		NesPage
	} from '../../lib/nes'
	const dispatch = createEventDispatcher()
	export let clicker = {}
</script>

<NesLayer center>
	<NesPage>
		<NesContainer>
			<span slot="label">Ammount</span>
			<div class="nes-ammount nes-center">
				{formatMoney(getRandInt(10000000000, 90000000000))}
			</div>
			<div class="nes-ammount nes-center">
				{formatMoney(clicker.total)}
			</div>
		</NesContainer>
		<NesContainer center>
			<h2 id="start">
				<a href="/game/start">#</a>
				Nes-Game
			</h2>
			<p>Clicker Game styled with NES.css</p>
			<nav class="nes-bar center">
				<button
					class="nes-btn is-primary"
					on:click={() => dispatch('dialog', 'Message from NES-Clicker Game')}
					>Message!</button>
				<button
					class="nes-btn is-primary"
					on:click={() => dispatch('action', 'Explosion')}>Action!</button>
			</nav>
		</NesContainer>
		<NesContainer>
			<nav class="nes-bar between">
				<a href="/" class="nes-btn is-error">Home</a>
				<a href="/game/start" class="nes-btn is-success">Start</a>
			</nav>
		</NesContainer>
	</NesPage>
</NesLayer>
