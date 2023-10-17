<script setup>
import { ref } from "vue";
import axios from "axios";
import {
    outlinedFilterList,
    outlinedPanoramaFishEye,
    outlinedTaskAlt,
} from "@quasar/extras/material-icons-outlined";
import { useI18n } from "vue-i18n";
import { useQuasar } from "quasar";

const emit = defineEmits(["filter"]);
const $q = useQuasar();
const filters = ref({
    company: null,
    department: null,
    gender: null,
    is_active: true,
});
const { t } = useI18n();
const showFilterDialog = ref(false);

function defaultFiltersValue() {}
</script>

<template>
    <q-btn
        :icon="outlinedFilterList"
        @click="() => (showFilterDialog = !showFilterDialog)"
        :class="
            $q.dark.isActive
                ? 'bg-dark text-blue-grey-3'
                : 'bg-white text-blue-grey-8'
        "
        flat
    >
        <q-tooltip class="bg-primary" anchor="top middle" self="center middle">
            Filter Data
        </q-tooltip>
    </q-btn>

    <!-- Filters Dialog -->
    <q-dialog
        v-model="showFilterDialog"
        class="q-pa-none"
        full-height
        maximized
        persistent
        position="right"
    >
        <q-card class="full-height" style="width: 350px">
            <q-card-section class="row items-center">
                <div class="text-h6 flex no-wrap items-center">
                    <q-icon :name="outlinedFilterList" />
                    <div class="q-px-sm">Filters option</div>
                </div>
                <q-space />
                <q-btn v-close-popup dense flat icon="close" round />
            </q-card-section>
            <q-separator spaced />

            <q-card-section>
                <q-input
                    v-model="filters.company"
                    type="text"
                    outlined
                    label="Company"
                />
            </q-card-section>

            <q-card-section>
                <q-select
                    outlined
                    v-model="filters.department"
                    clearable
                    :options="[
                        'Services',
                        'Marketing',
                        'Business Development',
                        'Project Management',
                        'Accounting',
                    ]"
                    label="Department"
                />
            </q-card-section>

            <q-card-section>
                <div class="text-uppercase">Gender</div>
                <div class="q-gutter-md">
                    <q-radio
                        v-model="filters.gender"
                        :checked-icon="outlinedTaskAlt"
                        :unchecked-icon="outlinedPanoramaFishEye"
                        val="male"
                        label="Male"
                    />
                    <q-radio
                        v-model="filters.gender"
                        :checked-icon="outlinedTaskAlt"
                        :unchecked-icon="outlinedPanoramaFishEye"
                        val="female"
                        label="Female"
                    />
                </div>
            </q-card-section>

            <q-card-section
                :class="$q.dark.isActive ? 'bg-darker' : 'bg-light'"
            >
                <q-toggle
                    v-model="filters.is_active"
                    label="Only Active Users"
                />
            </q-card-section>
            <q-card-actions
                align="center"
                class="absolute-bottom bg-lighter"
                vertical
            >
                <q-btn
                    label="Reset filters"
                    flat
                    @click="defaultFiltersValue"
                />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<style scoped></style>
