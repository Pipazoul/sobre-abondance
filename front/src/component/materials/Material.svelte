<script lang="ts">
    import {getItem} from '$lib/api';
	import Events from '../events/Events.svelte';
    import Products from '../products/Products.svelte';
    export let id;
    let materials = getItem("Materials", id);

</script>

<section>
    <div class="flex-col">
        {#await materials}
            <p>Chargement...</p>
        {:then material}
            <h1 class="text-4xl text-white uppercase font-black mb-10">{material.name}</h1>
            <div class="flex flex-col text-white  cursor-pointer p-4 bg-indigo-400 rounded-md mb-10">{material?.description}</div>
            <Products materialId={id} />
            <Events ids={material?.events} unit={material.unit}/>
        {:catch error}
            <p>Erreur: {error.message}</p>
        {/await}
        
</section>