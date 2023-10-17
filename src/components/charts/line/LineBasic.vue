<script setup>
import VueApexCharts from "vue3-apexcharts";

const series = [
    {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
];

const chartOptions = {
    chart: {
        height: 350,
        type: "line",
        zoom: {
            enabled: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "straight",
    },
    title: {
        text: "Product Trends by Month",
        align: "left",
    },
    grid: {
        row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
        },
    },
    xaxis: {
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
        ],
    },
};
</script>

<template>
    <q-card>
        <q-card-section>
            <VueApexCharts
                type="line"
                height="350"
                :options="chartOptions"
                :series="series"
            ></VueApexCharts>
        </q-card-section>
    </q-card>
</template>

<style scoped></style>
