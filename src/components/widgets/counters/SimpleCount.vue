<script setup>
import {
    outlinedHome,
    outlinedTag,
} from "@quasar/extras/material-icons-outlined";
import { useQuasar } from "quasar";
const props = defineProps({
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
const $q = useQuasar();
</script>

<template>
    <q-card class="q-pa-md" flat>
        <q-card-section horizontal class="justify-between items-center">
            <div>
                <div
                    class="text-h3"
                    :class="
                        $q.dark.isActive ? 'text-light' : 'text-blue-grey-8'
                    "
                >
                    {{ count }}
                </div>
                <div
                    class="text-h5 text-bold"
                    :class="
                        $q.dark.isActive ? 'text-light' : 'text-blue-grey-7'
                    "
                >
                    {{ label }}
                </div>
            </div>
            <div>
                <q-icon
                    class="q-pa-lg rounded-borders"
                    :class="$q.dark.isActive ? 'bg-darker' : 'bg-light'"
                    style="border-radius: 50%"
                    size="xl"
                    :name="icon"
                />
            </div>
        </q-card-section>
    </q-card>
</template>

<style scoped></style>
