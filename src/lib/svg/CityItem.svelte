<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	export let id, svg, tx, ty, hidden, gruppe
	function handleClick(e) {
		let id = parseInt(e.currentTarget.dataset.id)
		dispatch('click', { id, svg, tx, ty, hidden, gruppe })
	}
</script>

<g
	data-id={id}
	on:pointerdown={handleClick}
	data-group={gruppe}
	transform="translate({tx} {ty})"
	class="{gruppe} {svg}"
	class:opacity-0={hidden}>
	<svg class="rpg"><use xlink:href="#{svg}" /></svg>
</g>

<style>
</style>
