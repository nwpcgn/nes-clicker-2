import { writable } from 'svelte/store'

export const _session = writable(null)

export function sleep(milliseconds = 1000) {
	return new Promise((resolve) => setTimeout(resolve, milliseconds))
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

// @index('./*.svelte', f => `export { default as ${f.name} } from '${f.path}${f.ext}'`)
// export { default as AniItem } from './AniItem.svelte'
export { default as AniLayer } from './AniLayer.svelte'
// export { default as AniLayerItem } from './AniLayerItem.svelte'
// @endindex
