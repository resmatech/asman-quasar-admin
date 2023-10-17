<script setup>
import VueApexCharts from "vue3-apexcharts";

const series = [
    {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
];

const chartOptions = {
    chart: {
        type: "bar",
        height: 350,
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: true,
        },
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        categories: [
            "South Korea",
            "Canada",
            "United Kingdom",
            "Netherlands",
            "Italy",
            "France",
            "Japan",
            "United States",
            "China",
            "Germany",
        ],
    },
};
</script>

<template>
    <q-card>
        <q-card-section>
            <VueApexCharts
                type="bar"
                height="350"
                :options="chartOptions"
                :series="series"
            ></VueApexCharts>
        </q-card-section>
    </q-card>
</template>

<style scoped></style>
