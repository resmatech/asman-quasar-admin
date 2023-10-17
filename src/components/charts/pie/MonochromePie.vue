<script setup>
import VueApexCharts from "vue3-apexcharts";

const series = [25, 15, 44, 55, 41, 17];

const chartOptions = {
    chart: {
        type: "pie",
    },
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ],
    theme: {
        monochrome: {
            enabled: true,
        },
    },
    plotOptions: {
        pie: {
            dataLabels: {
                offset: -5,
            },
        },
    },
    title: {
        text: "Monochrome Pie",
    },
    dataLabels: {
        formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex];
            return [name, val.toFixed(1) + "%"];
        },
    },
    legend: {
        show: false,
    },
};
</script>

<template>
    <q-card>
        <q-card-section>
            <VueApexCharts
                type="pie"
                height="350"
                :options="chartOptions"
                :series="series"
            ></VueApexCharts>
        </q-card-section>
    </q-card>
</template>

<style scoped></style>
