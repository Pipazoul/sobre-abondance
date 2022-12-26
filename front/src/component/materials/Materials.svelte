<script lang="ts">
    import {getItems} from '$lib/api';

    let request = getItems("Materials");
</script>

<section class="w-full">
    <div class="flex flex-row flex-wrap w-full ">
        {#await request}
            <p>Chargement...</p>
        {:then materials}
            {#each materials as material}
                <a href="/materials/{material.id}">
                    <div class="flex flex-col  cursor-pointer p-4 bg-indigo-400 rounded-md h-52 w-52 ml-7 mb-7">
                        <h3 class="text-3xl text-white uppercase font-black">{material.name}</h3>
                        <!--<span class="material-icons pr-5 text-center ">{material.icon}</span>-->
                    </div>
                </a>
            {/each}
        {:catch error}
            <p>Erreur: {error.message}</p>
        {/await}
        
</section>