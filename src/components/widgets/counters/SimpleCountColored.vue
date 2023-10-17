<script setup>
import {
    outlinedHome,
    outlinedTag,
} from "@quasar/extras/material-icons-outlined";
import { useQuasar, colors } from "quasar";
const props = defineProps({
    color: {
        type: String,
    },

    label: {
        type: String,
    },

    icon: {
        type: String,
        default: outlinedTag,
    },

    count: {
        type: [Number, String],
    },
});
const { lighten, getPaletteColor } = colors;
const $q = useQuasar();
</script>

<template>
    <q-card class="q-pa-md" :class="color ? 'bg-' + color : ''" flat>
        <q-card-section horizontal class="justify-between items-center">
            <div>
                <div
                    class="text-h4"
                    :style="'color:' + lighten(getPaletteColor(color), 90)"
                >
                    {{ count }}
                </div>
                <div
                    class="text-h5 text-bold"
                    :style="'color:' + lighten(getPaletteColor(color), 80)"
                >
                    {{ label }}
                </div>
            </div>
            <div>
                <q-icon
                    class="q-pa-lg rounded-borders"
                    style="border-radius: 50%"
                    color="white"
                    :style="'background:' + lighten(getPaletteColor(color), 20)"
                    size="xl"
                    :name="icon"
                />
            </div>
        </q-card-section>
    </q-card>
</template>

<style scoped></style>
