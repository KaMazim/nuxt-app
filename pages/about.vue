<template>
    <h2>About</h2>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, porro totam? Eius,
        molestiae deleniti quos, corporis tempora eos debitis repudiandae est, repellendus ipsa
        aspernatur velit. Ab earum ullam, illo ipsam debitis delectus aliquam velit repellat
        perspiciatis cupiditate. Quasi, enim deserunt.
        <br />
        <b>{{ data?.message }}</b>
    </p>
</template>

<script setup lang="ts">
const { data, refresh } = await useFetch('/api/test?name=mario');
</script>
