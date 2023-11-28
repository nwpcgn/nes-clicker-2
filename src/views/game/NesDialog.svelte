<script>
	export let dialog

	const open = () => dialog.showModal()
</script>

<dialog class="nes-dialog is-rounded" bind:this={dialog} on:close>
	<form method="dialog">
		<slot />

		<menu class="dialog-menu">
			<button class="nes-btn">Cancel</button>
			<button class="nes-btn is-primary">Confirm</button>
		</menu>
	</form>
</dialog>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	menu {
		display: flex;
		align-items: center;
		padding: 0;
		margin: 0;
		gap: 0.5rem;
	}
</style>
