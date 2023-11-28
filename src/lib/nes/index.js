// @index('./*.svelte', f => `export { default as ${f.name} } from '${f.path}${f.ext}'`)
export { default as NesContainer } from './NesContainer.svelte'
export { default as NesLayer } from './NesLayer.svelte'
export { default as NesPage } from './NesPage.svelte'
// @endindex
export {
	_clicker,
	_settings,
	elapsed,
	formatMoney,
	formatNumber,
	getRandInt,
	sleep,
	time,
	timeFormatter
} from './_game'
