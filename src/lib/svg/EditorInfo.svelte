<script>
	export let todos

	$: totalTodos = todos.length
	$: completedTodos = todos.filter((todo) => todo.hidden)
</script>

<details class="flex flex-col gap-1 p-4 bg-white border-t mt-auto">
	<summary class="py-2 font-serif font-medium"
		>Hidden: {completedTodos.length} / {totalTodos}</summary>
	<textarea class="form-control" rows="6"
		>{JSON.stringify(completedTodos, null, 2)}</textarea>
</details>
