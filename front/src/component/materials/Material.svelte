<script lang="ts">
    import {getItem} from '$lib/api';
    export let id;
    let materials = getItem("Materials", id);

    materials.then((data) => {
        console.log(data);
    });

</script>

<section>
    <div class="flex-col">
        {#await materials}
            <p>Chargement...</p>
        {:then material}
            <h1 class="flex align-middle"><span class="material-icons pr-5">{material.icon}</span>{material.name}</h1>
            <p>{material?.description}</p>
        {:catch error}
            <p>Erreur: {error.message}</p>
        {/await}
        
</section>