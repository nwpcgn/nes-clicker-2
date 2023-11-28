<script>
	import { _session, sleep, getRandInt } from './'
	import AniItem from './AniItem.svelte'
	import AniLayerItem from './AniLayerItem.svelte'
	export let fwidth, fheight
	export let frame
	let element
	let fw = 100
	let fh = 100
	let ew = 72
	let eh = 72
	let xmax = 0
	let ymax = 0
	let xmin = 0
	let ymin = 0
	let x = 0
	let y = 0
	let dura = 400

	const onResize = () => {
		if (!element && !frame) console.log('NO ELEMENT')
		if (element) {
			const rect1 = element.getBoundingClientRect()
			ew = Math.floor(rect1.width)
			eh = Math.floor(rect1.height)
		}
		if (frame) {
			const rect2 = frame.getBoundingClientRect()
			fw = Math.floor(rect2.width)
			fh = Math.floor(rect2.height)
		}

		xmax = fw - ew - 1
		ymax = fh - eh - 1
		if (x <= xmin) x = xmin
		if (x >= xmax) x = xmax
		if (y <= ymin) y = ymin
		if (y >= ymax) y = ymax
	}

	const setIn = async () => {
		// onResize()
		let nx = getRandInt(xmin, xmax)
		let ny = getRandInt(ymax - 100, ymax)
		await sleep(10)
		x = Math.floor(nx)
		y = Math.floor(ny)
		insertDialog(x, y)
	}

	function insertDialog(x, y) {
		const d = new AniLayerItem({
			target: frame,
			props: { component: AniItem, xmin, xmax, x, y, dura }
		})
		d.$on('close', () => {
			d.$destroy()
			// setIn()
		})
	}

	$: if ($_session) setIn($_session)

	$: if (frame) onResize(fwidth, fheight)

	// $: console.log({xmin, xmax, ymin, ymax})
</script>
