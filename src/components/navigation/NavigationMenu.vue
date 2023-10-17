<script setup>
import NavigationCaption from "./NavigationCaption.vue";
import NavigationItem from "./NavigationItem.vue";

const props = defineProps({
    items: {
        type: Array,
        require: true,
    },
});
</script>

<template>
    <div v-for="(item, index) in items" :key="index">
        <NavigationCaption v-if="item.caption" :caption="item.caption" />
        <NavigationItem :item="item"></NavigationItem>
    </div>
</template>

<style scoped></style>
