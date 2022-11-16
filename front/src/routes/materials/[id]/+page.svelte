<script lang="ts">
    import { page } from '$app/stores';
    import Material from "../../../component/materials/Material.svelte";

</script>
<section>
   <Material id ={$page.params.id}/>
</section>