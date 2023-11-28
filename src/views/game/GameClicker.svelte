<script>
	import {
		formatNumber,
		formatMoney,
		NesContainer,
		NesLayer,
		NesPage
	} from '../../lib/nes'
	export let clicker = {}
	const handleClick = () => {
		clicker.total += clicker.inc.click
	}
</script>

<NesLayer>
	<NesPage middle>
		<NesContainer>
			<header class="nes-header">
				<h2 class="nes-center">NES-CLICKER</h2>
				<div class="nes-ammount nes-center">
					{formatMoney(clicker.total)}
				</div>
				<nav>
					<span class="nes-badge">
						<span class="is-primary">{formatNumber(clicker.inc.click)}</span>
					</span>
					<span class="nes-badge">
						<span class="is-dark">{formatNumber(clicker.inc.auto)}</span>
					</span>
				</nav>

				<nav>
					<button class="nes-btn is-primary" on:click={handleClick}
						>Click + {formatNumber(clicker.inc.click)}</button>
				</nav>
			</header>
		</NesContainer>
		<NesContainer>
			<nav class="nes-bar between">
				<a href="/game" class="nes-btn is-error">Start</a>
				<a href="/game/shop" class="nes-btn is-success">Shop</a>
			</nav>
		</NesContainer>
	</NesPage>
</NesLayer>
