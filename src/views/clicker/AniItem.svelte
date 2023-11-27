<script>
	/* 	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher() */

	export let pre = 'exp2'
	export let move = [
		'blank',
		'blank',
		'ex-1',
		'ex-2',
		'ex-3',
		'ex-4',
		'ex-4',
		'ex-6',
		'ex-7',
		'ex-8',
		'blank'
	]
	export let duration = 300
	export let infinity = true
	export let animated = false
	let interval1
	let current = 0
	const runAnimation = () => {
		if (interval1) clearInterval(interval1)

		let end = move.length - 1
		interval1 = setInterval(() => {
			if (current < end) {
				current = current + 1
			} else {
				if (infinity && animated) {
					current = 0
				} else {
					clearInterval(interval1)
					current = 0
				}
			}
		}, duration)
	}

	const toggleAnimation = () => {
		animated = !animated
		if (animated) runAnimation()
	}

	$: if (animated) runAnimation(duration)
</script>

<div
	on:pointerdown={toggleAnimation}
	class="border border-dashed cursor-pointer"
	class:bg-blue-100={!animated}
	class:border-blue-500={animated}>
	<div role="img" aria-label={pre} class="{pre} {move[current]}" />
</div>

<style>
	.exp1 {
		background-image: url('/img/game/exp1.sprite.png?v=x9KVOdZ0vPOLDHGAchdDH6uNFVvKf33sgIDyU');
		background-repeat: no-repeat;
		background-size: 42px 301px;
		display: inline-block;
		width: 32px;
		height: 32px;
	}

	.exp2 {
		background-image: url('/img/game/exp2.sprite.png?v=nsy1mukMBQ8jj7H3OqOk4x0n1aZaFyCzX7d8j');
		background-repeat: no-repeat;
		display: inline-block;
		background-size: 74px 557px;
		width: 64px;
		height: 64px;
	}

	.exp2.ex-1 {
		width: 64px;
		height: 64px;
		background-position: -5px -5px;
	}
	.exp2.ex-2 {
		width: 64px;
		height: 64px;
		background-position: -5px -74px;
	}
	.exp2.ex-3 {
		width: 64px;
		height: 64px;
		background-position: -5px -143px;
	}
	.exp2.ex-4 {
		width: 64px;
		height: 64px;
		background-position: -5px -212px;
	}
	.exp2.ex-5 {
		width: 64px;
		height: 64px;
		background-position: -5px -281px;
	}
	.exp2.ex-6 {
		width: 64px;
		height: 64px;
		background-position: -5px -350px;
	}
	.exp2.ex-7 {
		width: 64px;
		height: 64px;
		background-position: -5px -419px;
	}
	.exp2.ex-8 {
		width: 64px;
		height: 64px;
		background-position: -5px -488px;
	}

	.exp1.ex-1 {
		width: 32px;
		height: 32px;
		background-position: -5px -5px;
	}
	.exp1.ex-2 {
		width: 32px;
		height: 32px;
		background-position: -5px -42px;
	}
	.exp1.ex-3 {
		width: 32px;
		height: 32px;
		background-position: -5px -79px;
	}
	.exp1.ex-4 {
		width: 32px;
		height: 32px;
		background-position: -5px -116px;
	}
	.exp1.ex-5 {
		width: 32px;
		height: 32px;
		background-position: -5px -153px;
	}
	.exp1.ex-6 {
		width: 32px;
		height: 32px;
		background-position: -5px -190px;
	}
	.exp1.ex-7 {
		width: 32px;
		height: 32px;
		background-position: -5px -227px;
	}
	.exp1.ex-8 {
		width: 32px;
		height: 32px;
		background-position: -5px -264px;
	}
	.blank {
		background-position: 100px 0px;
		opacity: 0;
	}
</style>
