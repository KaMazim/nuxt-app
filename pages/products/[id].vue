<template>
    <div>
        <Head>
            <Title>Nuxt App | {{ product!.title }}</Title>
            <Meta name="description" :content="product!.description" />
        </Head>

        <ProductDetails :product="product" />
    </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id;
interface Product {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

//  fetch the products
const { data: product } = await useFetch<Product>(uri, {
    key: <string>id,
    onResponse({ request, response, options }) {
        // Process the response data
        return response._data;
    },
});

if (!product) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true });
}

definePageMeta({
    layout: 'products',
});
</script>
