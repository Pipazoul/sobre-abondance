<script lang="ts">
    import {getItems} from '$lib/api';
    export let materialId: number;
    let products = getItems("Products");

    let product : object;

    console.log(materialId);

    async function filterProducts(products, materialId) {
        const getProduct = await products.forEach((product) => {
            product.materials.forEach((material) => {
                if(material == materialId) {
                    return product;
                }
            }); 
        });
        product = getProduct;
    }

    filterProducts(products, materialId);

    console.log(product);


</script>
<section>
    <h1 class="text-4xl text-white uppercase font-black mb-10">Produits liés</h1>
</section>