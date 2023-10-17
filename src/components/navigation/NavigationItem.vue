<script setup>
const props = defineProps({
    item: {
        type: Object,
        require: true,
    },
});
</script>

<template>
    <section class="text-blue-grey-3">
        <q-expansion-item
            header-class="rounded-borders "
            expand-icon-class="text-blue-grey-4"
            class="q-mx-md text-body1 text-weight-medium"
            exact-active-class="bg-primary text-white"
            :icon="item.icon"
            :label="item.title"
            :to="item.link"
            :hide-expand-icon="!item.children"
        >
            <template v-if="item.children && item.children.length > 0">
                <q-item
                    v-for="(child, index) in item.children"
                    :key="index"
                    clickable
                    tag="a"
                    class="q-mx-md rounded-borders text-weight-medium"
                    exact-active-class="bg-primary text-white"
                    :to="child.link"
                >
                    <q-item-section v-if="child.icon" avatar>
                        <q-icon :name="child.icon" size="sm" />
                    </q-item-section>

                    <q-item-section>
                        <q-item-label class="text-body1 text-medium">{{
                            child.title
                        }}</q-item-label>
                    </q-item-section>
                </q-item>
            </template>
        </q-expansion-item>
    </section>
</template>

<style scoped></style>
