<script lang="ts">
    import {getItem} from '$lib/api';
	import Events from '../events/Events.svelte';
    export let id;
    let materials = getItem("Materials", id);

</script>

<section>
    <div class="flex-col">
        {#await materials}
            <p>Chargement...</p>
        {:then material}
            <h1 class="flex align-middle"><span class="material-icons pr-5">{material.icon}</span>{material.name}</h1>
            <p>{material?.description}</p>
            <Events ids={material?.events} unit={material.unit}/>
        {:catch error}
            <p>Erreur: {error.message}</p>
        {/await}
        
</section>