<script>
	import {
		formatNumber,
		formatMoney,
		NesContainer,
		NesLayer,
		NesPage
	} from '../../lib/nes'
	export let clicker = {}

	const upgrade = (slug) => {
		let obj = Object.assign({}, clicker.upgrades[slug])
		if (slug === 'r2' || slug === 'r3') {
			if (clicker.total >= obj.cost && obj.own < 50) {
				if (obj.own <= 13) {
					obj.boost = 1
				} else if (obj.own <= 24) {
					obj.boost = 200
				} else if (obj.own <= 48) {
					obj.boost = 5000
				} else {
					obj.boost = 15000
				}

				clicker.inc[obj.inc] += obj.eff * obj.boost
				obj.eff += 1
				obj.own += 1
				clicker.total -= obj.cost
				if (slug === 'r3') {
					obj.cost = obj.cost * 3
				} else {
					obj.cost = obj.cost * 2
				}
				
				clicker.upgrades[slug] = obj
				console.log(clicker.upgrades[slug])
			} else {
				console.log('Zu wenig Kapital !!!')
			}
		}

		if (slug === 'r1') {
			if (clicker.total >= obj.cost) {
				clicker.inc.click += obj.eff
				clicker.total -= obj.cost
				obj.own += 1
				obj.cost = obj.cost * 5
				obj.eff = obj.cost / 15
				clicker.upgrades[slug] = obj
				if (clicker.upgrades.r2.own == 50) {
					clicker.inc.click -= clicker.upgrades.r2.max
					clicker.upgrades.r2.max = Math.floor(clicker.inc.click * 0.15)
					clicker.inc.click += clicker.upgrades.r2.max
				}
				if (clicker.upgrades.r3.own == 50) {
					clicker.inc.click -= clicker.upgrades.r3.max
					clicker.upgrades.r3.max = Math.floor(clicker.inc.click * 0.35)
					clicker.inc.click += clicker.upgrades.r3.max
				}
			} else {
				console.log('Zu wenig Kapital !!!')
			}
		}
	}
</script>

<NesLayer>
	<NesPage middle>
		<NesContainer>
			<header class="nes-header">
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
				<div class="flex flex-wrap justify-center gap-2">
					{#each Object.entries(clicker.upgrades) as [key, { name, own, eff, cost, inc, boost }]}
						<article class="flex flex-col gap-2 shadow">
							<div class="flex items-center justify-between gap-4">
								<span>{name}</span>
								<span>{own}</span>
							</div>
							<div class="nes-text is-error single-line">
								{formatMoney(cost)}
							</div>
							<div class="nes-text is-primary single-line">
								+{formatNumber(eff * boost)}
								{inc}
							</div>
							<button on:click={() => upgrade(key)} class="nes-btn is-primary"
								>Upgrade</button>
						</article>
					{/each}
				</div>
			</header>
		</NesContainer>
		<NesContainer>
			<nav class="nes-bar">
				<a href="/game/start" class="nes-btn is-error">Back</a>
			</nav>
		</NesContainer>
	</NesPage>
</NesLayer>
