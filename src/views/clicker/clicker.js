// import storage from "../../lib/util/storage";
import { writable } from 'svelte/store'

export const _settings = writable({
	titel: 'Savage Submarine Legend',
	player: '',
	set: {
		auto_save: false,
		muted: false,
		auto_save_int: 30000,
		tick_int: 1000,
		volume: 0.2
	},
	op: {
		op1: false,
		op2: false,
		op3: false,
		op4: false
	}
})
// export const _store = storage("nwp_store", {});
// export const _user = writable(null)
export let clicker = {
	total: 0,
	inc: {
		auto: 0,
		click: 1
	},
	upgrades: {
		r1: {
			name: 'Resource 1',
			own: 0,
			eff: 1,
			cost: 15,
			inc: 'click',
			max: 0,
			boost: 1
		},
		r2: {
			name: 'Resource 2',
			own: 0,
			eff: 1,
			cost: 25,
			inc: 'auto',
			max: 0,
			boost: 1
		},
		r3: {
			name: 'Resource 3',
			own: 0,
			eff: 15,
			cost: 250,
			inc: 'auto',
			max: 0,
			boost: 1
		}
	}
}
export const _clicker = writable(clicker)

export const _frame = writable({
	width: 100,
	height: 100
})

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
