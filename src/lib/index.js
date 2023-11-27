// Reexport your entry components here
export { default as Layer } from './Layer.svelte'
export { default as Loader } from './Loader.svelte'
export { default as Page } from './Page.svelte'

export { _session } from './db/stores'

export function clickOutside(node) {
	const handleClick = (event) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside', node))
		}
	}

	document.addEventListener('click', handleClick, true)

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true)
		}
	}
}
export function sleep(milliseconds = 1000) {
	return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

export function fetchData(url) {
	return fetch(url)
		.then((r) => r.json())
		.then((d) => d)
		.catch((e) => e)
}

export function groupBy(list, keyGetter) {
	const map = new Map()
	list.forEach((item) => {
		const key = keyGetter(item)
		const collection = map.get(key)
		if (!collection) {
			map.set(key, [item])
		} else {
			collection.push(item)
		}
	})
	return map
}

export function Point(x, y) {
	this.x = x
	this.y = y

	this.distanceTo = function (point) {
		var distance = Math.sqrt(
			Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2)
		)
		return distance
	}
}

export const getRandInt = (min, max) => Math.random() * (max - min) + min
