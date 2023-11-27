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
	// let filter2 = [...myFilter2]
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

	const toggleAll = () => {
		cityArr = cityArr.map((t) => ({ ...t, hidden: completed }))
		completed = !completed
	}

	// $: console.log(filterCityGroups(filter, cityArr))
</script>

<div class="p-4 bg-white shadow">
	<FilterButton bind:filter {filter1}>
		<button class="btn" on:click={toggleAll}>Toggle All</button>
	</FilterButton>
	<!-- <textarea class="form-control">{filter1.join(', ')}</textarea> -->
</div>
<nav class="flex flex-wrap gap-1 p-4">
	{#each filterCityGroups(filter, cityArr) as todo (todo.id)}
		<EditorListRow {todo} on:update={(e) => updateCityObj(e.detail)} />
	{/each}
</nav>
<!-- <EditorInfo bind:todos={cityArr} /> -->
