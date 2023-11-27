## Markup

```html
<script>
	import CityCanvas from '../lib/svg/CityCanvas.svelte'
	import EditorList from '../lib/svg/EditorList.svelte'
	export let data = []
	let panel1 = false
</script>

<CityCanvas bottom bind:data />

<div class="absolute w-full">
	<nav class="p-4 flex gap-2 bg-white border-b">
		<a href="/" class="btn">home</a>
		<button on:click={() => (panel1 = !panel1)} type="button" class="btn"
			>open</button>
	</nav>
</div>

<aside
	class="absolute border-l top-0 right-0 h-full overflow-hidden w-full flex flex-col max-w-md lg:max-w-lg transform transition-transform duration-300 ease-out"
	class:translate-x-full={!panel1}>
	<header class="p-4 bg-blue-500 text-white border-b">
		<button on:click={() => (panel1 = !panel1)} type="button" class="btn"
			>close</button>
	</header>
	<article class="flex-1 flex flex-col overflow-y-auto bg-black bg-opacity-50">
		<EditorList bind:cityArr={data} />
	</article>
</aside>
```
