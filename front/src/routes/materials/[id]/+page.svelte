<script lang="ts">
    import { page } from '$app/stores';
    import Material from "../../../component/materials/Material.svelte";

</script>
<section>
    <a href="/"><button class="flex items-center text-white text-xl uppercase font-bold cursor-pointer p-2  bg-indigo-400 rounded-md w-42  mb-7"><span class="material-icons pr-5 text-center ">arrow_back_ios</span><span class="pb-1 pr-5">Retour</span></button></a>
   <Material id ={$page.params.id}/>
</section>