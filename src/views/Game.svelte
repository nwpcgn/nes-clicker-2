<script>
	import { onMount } from 'svelte'
	import { path } from 'elegua'
	import { _session } from '../lib/animation'
	import GameClicker from './game/GameClicker.svelte'
	import GameShop from './game/GameShop.svelte'
	import GameStart from './game/GameStart.svelte'
	import NesDialog from './game/NesDialog.svelte'
	// import {
	// 	formatNumber,
	// 	formatMoney,
	// 	getRandInt,
	// 	NesContainer,
	// 	NesLayer,
	// 	NesPage
	// } from '../lib/nes'

	export let clicker = {}
	let dialogMsg = `This is amazingly simple! (press esc to close)`
	let dialog
	let tickId1

	const handleTick = () => {
		if (clicker.inc.auto) {
			clicker.total += clicker.inc.auto
		}
	}
	const startTick = (interval = 2000) => {
		if (tickId1) clearInterval(tickId1)

		tickId1 = setInterval(handleTick, interval)
		// if (tickId1) console.log("Start Tick", tickId1)
	}
	const stopTick = () => {
		// if (tickId1) console.log("Stop Tick", tickId1)
		if (tickId1) clearInterval(tickId1)
		_session.set(null)
	}
	const fire = () => {
		let id = 'id' + new Date().getTime()
		_session.set(id)
	}

	const handleDialog = (e) => {
		dialogMsg = e.detail
		dialog.showModal()
	}

	onMount(() => {
		startTick()
		return () => stopTick()
	})
</script>

<NesDialog bind:dialog on:close={() => console.log('closed')}>
	<div>{@html dialogMsg}</div>
</NesDialog>

{#if $path == '/game/shop'}
	<GameShop bind:clicker />
{:else if $path === '/game/start'}
	<GameClicker bind:clicker />
{:else}
	<GameStart bind:clicker on:action={fire} on:dialog={handleDialog} />
{/if}
