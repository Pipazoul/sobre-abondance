<script>
	import Materials from "../component/materials/Materials.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Sobre abondance" />
</svelte:head>

<section>
	<div>
		<h2 class="text-2xl">Référenciel des matériaux</h2>
		<p>
			La liste ci dessous est un référenciel des matériaux utilisés dans le quotidien ainsi qu'une visualisation de leur rareté
		</p>
		<Materials />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
