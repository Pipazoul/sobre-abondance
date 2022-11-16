<script lang="ts">
    import {getItem} from '$lib/api';
    export let id;
    let request = getItem("Materials", id);
</script>

<section>
    <div class="flex-col">
        {#await request}
            <p>Chargement...</p>
        {:then material}
            <h1>{material.name}</h1>
        {:catch error}
            <p>Erreur: {error.message}</p>
        {/await}
        
</section>