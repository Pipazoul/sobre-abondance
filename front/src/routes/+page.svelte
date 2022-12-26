<script>
	import Materials from "../component/materials/Materials.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Sobre abondance" />
</svelte:head>

<section>
	<div class="w-full">
		<h2 class="uppercase text-4xl font-black w-max mb-5">Selection matériaux</h2>
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
