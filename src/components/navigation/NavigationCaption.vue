<script setup>
const props = defineProps({
    caption: {
        type: String,
        require: true,
    },
});
</script>

<template>
    <p
        class="q-mt-md q-ml-lg text-caption text-uppercase text-blue-grey-6"
        style="margin-bottom: 5px"
    >
        {{ caption }}
    </p>
</template>

<style scoped></style>
