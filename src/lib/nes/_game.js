// import storage from "../../lib/util/storage";
import { writable, readable, derived } from 'svelte/store'

// export const _store = storage("nwp_store", {});
const clickerDefault = {
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
const start = new Date()
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
export const _clicker = writable(clickerDefault)
/* export function Point(x, y) {
	this.x = x
	this.y = y

	this.distanceTo = function (point) {
		var distance = Math.sqrt(
			Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2)
		)
		return distance
	}
} */
export const getRandInt = (min, max) => Math.random() * (max - min) + min
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
export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date())
	}, 1000)

	return function stop() {
		clearInterval(interval)
	}
})

export const elapsed = derived(time, ($time) =>
	Math.round(($time - start) / 1000)
)

export const timeFormatter = new Intl.DateTimeFormat('de', {
	hour12: false,
	hour: 'numeric',
	minute: '2-digit',
	second: '2-digit'
})

/**
 * Number.prototype.format(n, x, s, c)
 *
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */
Number.prototype.format = function (n = 0, x = 3, s = '.', c = ',') {
	var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
		num = this.toFixed(Math.max(0, ~~n))

	return (c ? num.replace('.', c) : num).replace(
		new RegExp(re, 'g'),
		'$&' + (s || ',')
	)
}

export function formatMoney(
	amount,
	decimalCount = 0,
	decimal = ',',
	thousands = '.'
) {
	try {
		return `${amount.format(decimalCount, 3, thousands, decimal)} €`
	} catch (error) {
		console.log(error)
	}
}
export function formatNumber(
	amount,
	decimalCount = 0,
	decimal = ',',
	thousands = '.'
) {
	try {
		return `${amount.format(decimalCount, 3, thousands, decimal)}`
	} catch (error) {
		console.log(error)
	}
}
// var numbers = [1, 12, 123, 1234, 12345, 123456, 1234567, 12345.67, 123456.789];

// document.write('<p>Classic Format:</p>');
// for (var i = 0, len = numbers.length; i < len; i++) {
//   document.write('R$ ' + numbers[i].format(0, 3, '.', ',') + '<br />');
// }
