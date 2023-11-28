<script>
	export let x = 1
	export let y = 1
	export let gap = 1
	export let middle = false
	export let small = false
	export let blank = false
</script>

<div
	class="nes-page"
	style="--nes-px: {x}rem; --nes-py: {y}rem; --nes-gap: {gap}rem;"
	class:middle
	class:small
	class:blank>
	<slot />
</div>
