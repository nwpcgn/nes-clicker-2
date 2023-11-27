<script>
	import { path, dynamic } from 'elegua'
	const menu = [
		{ name: 'Home', icon: 'icon-home', href: '/' },
		{ name: 'Profile', icon: 'icon-person', href: '/p1' },
		{ name: 'Favs', icon: 'icon-star-filled', href: '/p2' },
		{ name: 'Search', icon: 'icon-search', href: '/p3' },
		{ name: 'Settings', icon: 'icon-gear', href: '/p4' }
	]
</script>

<footer>
	<nav class="bar bar-tab">
		{#each menu as { name, icon, href }}
			<a class="tab-item" class:active={$path === href} {href}>
				<span class="icon {icon}" />
				<span class="tab-label">{name}</span>
			</a>
		{/each}
	</nav>
</footer>
