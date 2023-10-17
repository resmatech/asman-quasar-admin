<script setup>
import {
    outlinedGrade,
    outlinedGroup,
    outlinedPersonAdd,
    outlinedSell,
} from "@quasar/extras/material-icons-outlined";
import TimelineWidget from "src/components/widgets/TimelineWidget.vue";
import BasicBar from "components/charts/bar/BasicBar.vue";
import SimpleCountColored from "src/components/widgets/counters/SimpleCountColored.vue";
import ZoomableTimeSeries from "components/charts/line/ZoomableTimeSeries.vue";
import SimplePie from "components/charts/pie/SimplePie.vue";
import SimpleDonut from "components/charts/pie/SimpleDonut.vue";
</script>

<template>
    <q-page padding>
        <h6 class="q-my-none text-h6 text-bold">Dashboard</h6>
        <q-breadcrumbs align="left">
            <q-breadcrumbs-el label="Main" />
        </q-breadcrumbs>

        <div class="row q-col-gutter-lg q-mt-lg">
            <div class="col-12 col-md-3">
                <simple-count-colored
                    :count="50"
                    color="primary"
                    :icon="outlinedGroup"
                    label="Customers"
                ></simple-count-colored>
            </div>
            <div class="col-12 col-md-3">
                <simple-count-colored
                    count="2.5M"
                    color="positive"
                    label="Sales"
                    :icon="outlinedSell"
                ></simple-count-colored>
            </div>
            <div class="col-12 col-md-3">
                <simple-count-colored
                    :count="3982"
                    color="negative"
                    label="Orders"
                    :icon="outlinedGrade"
                ></simple-count-colored>
            </div>
            <div class="col-12 col-md-3">
                <simple-count-colored
                    :count="1002"
                    color="info"
                    label="New users"
                    :icon="outlinedPersonAdd"
                ></simple-count-colored>
            </div>
        </div>

        <div class="row q-col-gutter-x-lg q-mt-lg items-start">
            <div class="col-12 col-md-6">
                <timeline-widget></timeline-widget>
            </div>

            <div class="col-12 col-md-6">
                <ZoomableTimeSeries></ZoomableTimeSeries>
                <div class="row q-col-gutter-lg q-mt-xs">
                    <div class="col-12 col-md-6">
                        <SimplePie></SimplePie>
                    </div>

                    <div class="col-12 col-md-6">
                        <SimpleDonut></SimpleDonut>
                    </div>
                </div>

                <div class="row q-mt-lg">
                    <div class="col-12">
                        <BasicBar></BasicBar>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<style scoped></style>
