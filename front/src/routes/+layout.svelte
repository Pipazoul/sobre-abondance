<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main class="m-auto w-3/6 mt-5">
		<slot />
	</main>

	<footer class="absolute bottom-0">
		<p>C'est un Footer</p>
	</footer>
</div>

<style>
	
</style>
