<script>
	import { clickOutside } from '../../lib'
	export let show
	const close = () => {
		show = false
	}
</script>

<div
	class="navdrawer navdrawer-default"
	class:show
	tabindex="-1"
	style="display: block;">
	<div class="navdrawer-content" use:clickOutside on:click_outside={close}>
		<div class="navdrawer-header">
			<a class="navbar-brand px-0">Navdrawer header</a>
		</div>
		<nav class="navdrawer-nav">
			<a class="nav-item nav-link active">Active</a>
			<a class="nav-item nav-link disabled">Disabled</a>
			<a class="nav-item nav-link">Link</a>
		</nav>
		<div class="navdrawer-divider" />
		<p class="navdrawer-subheader">Navdrawer subheader</p>
		<ul class="navdrawer-nav">
			<li class="nav-item">
				<a class="nav-link active">
					<i class="material-icons mr-3">alarm_on</i> Active with icon</a>
			</li>
			<li class="nav-item">
				<a class="nav-link disabled" href="javascript:void(0)"
					><i class="material-icons mr-3">alarm_off</i> Disabled with icon</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="javascript:void(0)"
					><i class="material-icons mr-3">link</i> Link with icon</a>
			</li>
		</ul>
	</div>
</div>

{#if show}
	<div class="navdrawer-backdrop navdrawer-backdrop-default" class:show />
{/if}
