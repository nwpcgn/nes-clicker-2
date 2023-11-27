<!-- components/Todo.svelte -->
<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	export let todo
	let editing = false // track editing mode
	let editButtonPressed = false // track if edit button has been pressed, to give focus to it after cancel or save

	let name = todo.svg // hold the name of the todo being edited

	function update(updatedTodo) {
		todo = { ...todo, ...updatedTodo } // applies modifications to todo
		dispatch('update', todo) // emit update event
	}

	function onCancel() {
		name = todo.name // restores name to its initial value
		editing = false // and exit editing mode
	}

	function onSave() {
		update({ name: name }) // updates todo name
		editing = false // and exit editing mode
	}

	function onEdit() {
		editButtonPressed = true // when Cancel or Save is pressed, focus should go back to the Edit button
		editing = true // enter editing mode
	}

	function onToggle() {
		update({ hidden: !todo.hidden }) // updates todo status
	}
</script>

{#if editing}
	<!-- markup for editing todo: label, input text, Cancel and Save Button -->
	<form on:submit|preventDefault={onSave} class="stack-item">
		<div class="form-group">
			<label for="todo-{todo.id}" class="todo-label"
				>New name for '{todo.svg}'</label>
			<input
				bind:value={name}
				type="text"
				id="todo-{todo.id}"
				class="todo-text" />
		</div>

		<div class="btn-group">
			<button class="btn todo-cancel" on:click={onCancel} type="button">
				Cancel<span class="visually-hidden">renaming {todo.svg}</span>
			</button>
			<button class="btn btn__primary todo-edit" type="submit" disabled={!name}>
				Save<span class="visually-hidden">new name for {todo.name}</span>
			</button>
		</div>
	</form>
{:else}
	<div class="flex flex-col flex-grow">
		<button
			id="todo-{todo.id}"
			on:click={onToggle}
			class="toggle-btn"
			class:active={!todo.hidden}>
			<span class="capitalize">{todo.svg.replaceAll('-', ' ')}</span>
		</button>

		<div class="sr-only">
			<button type="button" on:click={onEdit}>
				Edit<span class="sr-only">{todo.svg}</span>
			</button>
		</div>
	</div>
{/if}

<style>
	.toggle-btn {
		@apply p-1 border text-xs leading-snug truncate text-blue-600 bg-white rounded-full;
	}
	.toggle-btn.active {
		@apply bg-blue-500 text-white;
	}
	.form-group,
	.btn-group {
		@apply flex items-center gap-2;
	}

	.stack-item {
		@apply flex flex-col items-center gap-2 p-2;
	}

	.todo-label {
		@apply text-xs font-light capitalize;
	}
</style>
