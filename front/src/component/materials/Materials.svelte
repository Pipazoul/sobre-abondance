<script lang="ts">
    import {getItems} from '$lib/api';

    let request = getItems("Materials");
</script>

<section>
    MATERIAUX
    <div class="flex-col">
        {#await request}
            <p>Chargement...</p>
        {:then materials}
            {#each materials as material}
                <a href="/materials/{material.id}">
                    <div class="flex align-middle cursor-pointer mt-5 p-4 border">
                        <span class="material-icons pr-5">{material.icon}</span>
                        {material.name}
                    </div>
                </a>
            {/each}
        {:catch error}
            <p>Erreur: {error.message}</p>
        {/await}
        
</section>