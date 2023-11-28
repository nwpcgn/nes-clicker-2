<script>
	import {
		elapsed,
		NesContainer,
		NesLayer,
		NesPage,
		time,
		timeFormatter
	} from '../lib/nes'
	// import { path } from 'elegua'
</script>

<NesLayer>
	<NesPage>
		<NesContainer>
			<div slot="label">{timeFormatter.format($time)}</div>

			<p>
				This page has been open for
				{$elapsed}
				{$elapsed === 1 ? 'second' : 'seconds'}
			</p>
		</NesContainer>
		<NesContainer center>
			<h2 id="installation"><a href="/game">#</a> Clicker Game</h2>
			<p>NES.css is available via either npm or Yarn, or a CDN.</p>
			<p>
				Please read <a href="/game">README.md</a>.
			</p>
		</NesContainer>
	</NesPage>
</NesLayer>
