<script setup>
import {
    outlinedGrade,
    outlinedGroup,
    outlinedPersonAdd,
    outlinedSell,
} from "@quasar/extras/material-icons-outlined";
import TimelineWidget from "src/components/widgets/TimelineWidget.vue";
import SimpleCount from "src/components/widgets/counters/SimpleCount.vue";
import SimpleCountColored from "src/components/widgets/counters/SimpleCountColored.vue";
</script>

<template>
    <q-page padding>
        <h6 class="q-my-none text-h6 text-bold">Widgets</h6>
        <q-breadcrumbs align="left">
            <q-breadcrumbs-el label="Main" />
            <q-breadcrumbs-el label="Widgets" />
        </q-breadcrumbs>

        <div class="row q-col-gutter-lg q-mt-lg">
            <div class="col-4">
                <simple-count
                    :count="50"
                    :icon="outlinedGroup"
                    label="Customers"
                ></simple-count>
            </div>
            <div class="col-4">
                <simple-count
                    count="2.5M"
                    label="Sales"
                    :icon="outlinedSell"
                ></simple-count>
            </div>
            <div class="col-4">
                <simple-count
                    :count="3982"
                    label="Orders"
                    :icon="outlinedGrade"
                ></simple-count>
            </div>
        </div>
        <div class="row q-col-gutter-lg q-mt-lg">
            <div class="col-3">
                <simple-count-colored
                    :count="50"
                    color="primary"
                    :icon="outlinedGroup"
                    label="Customers"
                ></simple-count-colored>
            </div>
            <div class="col-3">
                <simple-count-colored
                    count="2.5M"
                    color="positive"
                    label="Sales"
                    :icon="outlinedSell"
                ></simple-count-colored>
            </div>
            <div class="col-3">
                <simple-count-colored
                    :count="3982"
                    color="negative"
                    label="Orders"
                    :icon="outlinedGrade"
                ></simple-count-colored>
            </div>
            <div class="col-3">
                <simple-count-colored
                    :count="1002"
                    color="info"
                    label="New users"
                    :icon="outlinedPersonAdd"
                ></simple-count-colored>
            </div>
        </div>

        <div class="row q-col-gutter-lg q-mt-lg">
            <div class="col-6">
                <timeline-widget></timeline-widget>
            </div>
        </div>
    </q-page>
</template>

<style scoped></style>
