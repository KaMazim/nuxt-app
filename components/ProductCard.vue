<template>
    <div class="card text-center">
        <img :src="`${product.image}`" class="thumb" />
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4">View Details</p>
        </NuxtLink>
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

const { product } = defineProps<{ product: Product }>();
</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>
