<script>
	import { _session } from '../lib'
	import Layer from '../lib/Layer.svelte'
	import Page from '../lib/Page.svelte'
	export let step = 0
	export let clicker = {}
	function formatMoney(
		amount,
		decimalCount = 0,
		decimal = ',',
		thousands = '.'
	) {
		try {
			decimalCount = Math.abs(decimalCount)
			decimalCount = isNaN(decimalCount) ? 2 : decimalCount

			const negativeSign = amount < 0 ? '-' : ''

			let i = parseInt(
				(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
			).toString()
			let j = i.length > 3 ? i.length % 3 : 0

			return (
				negativeSign +
				(j ? i.substr(0, j) + thousands : '') +
				i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
				(decimalCount
					? decimal +
					  Math.abs(amount - i)
							.toFixed(decimalCount)
							.slice(2)
					: '')
			)
		} catch (e) {
			console.log(e)
		}
	}
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
				obj.eff++
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

	const handleClick = () => {
		clicker.total += clicker.inc.click
	}
	const fire = () => {
		let id = 'id' + new Date().getTime()
		_session.set(id)
	}
</script>

<Layer out="top" active={step == 2}>
	<Page center nes>
		<header class="nes-header">
			<h2>Clicker Shop</h2>
			<h1 class="text-4xl font-medium">{clicker.total}</h1>

			<div class="flex flex-wrap justify-center gap-2">
				{#each Object.entries(clicker.upgrades) as [key, { name, own, eff, cost, inc }]}
					<article class="flex flex-col gap-2 shadow">
						<div class="flex items-center justify-between gap-4">
							<span>{name}</span>
							<span>{own}</span>
						</div>
						<div class="nes-text is-error">{cost} $</div>
						<button on:click={() => upgrade(key)} class="nes-btn is-primary"
							>+ {eff} {inc}</button>
					</article>
				{/each}
			</div>
			<nav>
				<button class="nes-btn is-error" on:click={() => (step = 1)}>
					Back
				</button>
			</nav>
		</header>
	</Page>
</Layer>

<Layer out="bottom" active={step == 1}>
	<Page center nes>
		<div class="nes-header">
			<h2>Clicker Game</h2>

			<div class="nes-text is-primary single-line">
				{formatMoney(clicker.total)}
			</div>

			<div class="nes-text is-disabled">
				{formatMoney(clicker.inc.click)} | {formatMoney(clicker.inc.auto)}
			</div>

			<nav>
				<button class="nes-btn is-primary" on:click={handleClick}
					>Click + {formatMoney(clicker.inc.click)}</button>
			</nav>

			<div class="flex flex-col items-center justify-center gap-2">
				<button class="nes-btn is-error" on:click={() => (step = 2)}>
					Shop
				</button>
				<a href="/" class="nes-bt">Home</a>
			</div>
		</div>
	</Page>
</Layer>

<Layer out="top" active={step == 0}>
	<Page small center nes>
		<header class="nes-header">
			<h2>Landing Page</h2>
			<nav>
				<button class="nes-btn is-primary" on:click={() => (step = 1)}>
					Start
				</button>
			</nav>
			<nav>
				<button class="nes-btn" on:click={fire}> Explode </button>
			</nav>
		</header>
	</Page>
</Layer>
