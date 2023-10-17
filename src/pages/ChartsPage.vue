<script setup>
import LineBasic from "components/charts/line/LineBasic.vue";
import ZoomableTimeSeries from "components/charts/line/ZoomableTimeSeries.vue";
import GradientLine from "components/charts/line/GradientLine.vue";
import LineChartWithAnnotation from "components/charts/line/LineChartWithAnnotation.vue";
import BasicBar from "components/charts/bar/BasicBar.vue";
import StackedChart from "components/charts/bar/StackedChart.vue";
import SimplePie from "components/charts/pie/SimplePie.vue";
import SimpleDonut from "components/charts/pie/SimpleDonut.vue";
import MonochromePie from "components/charts/pie/MonochromePie.vue";
</script>

<template>
    <q-page padding>
        <h6 class="q-my-none text-h6 text-bold">Charts</h6>
        <q-breadcrumbs align="left">
            <q-breadcrumbs-el label="Main" />
            <q-breadcrumbs-el label="Charts" />
        </q-breadcrumbs>

        <h5 class="text-bold q-mb-md">Line Charts</h5>
        <q-separator spaced />
        <div class="row q-col-gutter-x-lg q-col-gutter-y-lg q-mt-xs">
            <div class="col-12 col-md-4">
                <LineBasic></LineBasic>
            </div>
            <div class="col-12 col-md-8">
                <ZoomableTimeSeries></ZoomableTimeSeries>
            </div>

            <div class="col-12 col-md-8">
                <LineChartWithAnnotation></LineChartWithAnnotation>
            </div>
            <div class="col-12 col-md-4">
                <GradientLine></GradientLine>
            </div>
        </div>

        <h5 class="text-bold q-mb-md">Bar Charts</h5>
        <q-separator spaced />
        <div class="row q-col-gutter-x-lg q-col-gutter-y-lg q-mt-xs">
            <div class="col-12 col-md-6">
                <BasicBar></BasicBar>
            </div>
            <div class="col-12 col-md-6">
                <StackedChart></StackedChart>
            </div>
        </div>

        <h5 class="text-bold q-mb-md">Pie / Donut Charts</h5>
        <q-separator spaced />

        <div class="row q-col-gutter-x-lg q-col-gutter-y-lg q-mt-xs">
            <div class="col-12 col-md-4">
                <SimplePie></SimplePie>
            </div>

            <div class="col-12 col-md-4">
                <MonochromePie></MonochromePie>
            </div>
            <div class="col-12 col-md-4">
                <SimpleDonut></SimpleDonut>
            </div>
        </div>
    </q-page>
</template>

<style scoped></style>
