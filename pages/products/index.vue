<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Product {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

//  fetch the products
const { data: products } = await useFetch<Product[]>('https://fakestoreapi.com/products');

definePageMeta({
    layout: 'products',
});

useHead({
    title: 'Nuxt App | Merch',
    meta: [{ name: 'description', content: 'Nuxt App Merch' }],
});
</script>
