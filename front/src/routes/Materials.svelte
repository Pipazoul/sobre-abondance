<script lang="ts">
    import {getItems} from '../lib/api';

    let request = getItems("Materials");
</script>

<section>
    MATERIAUX
    <div class="flex-col">
        {#await request}
            <p>Chargement...</p>
        {:then materials}
            {#each materials as material}
                <div class="flex align-middle cursor-pointer mt-5">
                    <span class="material-icons">{material.icon}</span>
                    {material.name}
                </div>
            {/each}
        {:catch error}
            <p>Erreur: {error.message}</p>
        {/await}
        
</section>