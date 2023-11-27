<script>
	// import EditorInfo from './EditorInfo.svelte'
	import EditorListRow from './EditorListRow.svelte'
	import FilterButton from './FilterButton.svelte'
	export let cityArr = []
	const myFilter1 = new Set()
	const myFilter2 = new Set()

	for (const key of cityArr) {
		myFilter1.add(key.gruppe)
		myFilter2.add(key.svg)
	}

	let filter1 = [...myFilter1]
	let filter2 = [...myFilter2]
	let completed = true
	let filter = 'all'
	const updateCityObj = (todo) => {
		const i = cityArr.findIndex((t) => t.id === todo.id)
		cityArr[i] = { ...cityArr[i], ...todo }
	}

	const filterCityGroups = (filter, data) => {
		if (filter === 'all') {
			return data
		} else {
			return data.filter((t) => t.gruppe === filter)
		}
	}

	const toggleCityGroups = (filter, data) => {
		if (filter === 'all') {
			toggleAll()
		} else {
			let list = data.filter((t) => t.gruppe === filter)
			console.log(filter, list)
			for (const el of list) {
				updateCityObj({ ...el, hidden: completed })
			}
			completed = !completed
		}
	}
	const toggleAll = () => {
		cityArr = cityArr.map((t) => ({ ...t, hidden: completed }))
		completed = !completed
	}

	// $: console.log(filterCityGroups(filter, cityArr))
</script>

<div class="city-edit">
	<div class="edit-top">
		<nav class="p-4 flex gap-2 bg-white">
			<a href="/" class="btn">exit</a>
			<button class="btn" on:click={toggleAll}>Toggle All</button>
			<button class="btn" on:click={() => toggleCityGroups(filter, cityArr)}
				>Toggle Group</button>
			<span class="flex-1" />
		</nav>
		<FilterButton bind:filter {filter1} />
	</div>
	<div class="edit-sb">
		<article
			class="flex-1 flex flex-col overflow-y-auto bg-black bg-opacity-50">
			<nav class="flex flex-wrap gap-1 p-4">
				{#each filterCityGroups(filter, cityArr) as todo (todo.id)}
					<EditorListRow {todo} on:update={(e) => updateCityObj(e.detail)} />
				{/each}
			</nav>
		</article>
	</div>
	<div class="edit-main border-t">
		<slot />
	</div>
</div>

<style>
	.city-edit {
		display: grid;
		grid-template-columns: 5fr 2fr;
		grid-template-rows: 2fr 3fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'edit-top edit-sb'
			'edit-main edit-sb';
		width: 100%;
		height: 100%;
	}

	.edit-top {
		grid-area: edit-top;
		position: relative;
	}

	.edit-sb {
		grid-area: edit-sb;
		position: relative;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}

	.edit-main {
		grid-area: edit-main;
		position: relative;
		display: flex;
		flex-direction: column;
	}
</style>
