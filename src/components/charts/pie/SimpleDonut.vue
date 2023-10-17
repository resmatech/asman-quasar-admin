<script setup>
import VueApexCharts from "vue3-apexcharts";

const series = [44, 55, 41, 17, 15];

const chartOptions = {
    chart: {
        type: "donut",
    },
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    position: "bottom",
                },
            },
        },
    ],
};
</script>

<template>
    <q-card>
        <q-card-section>
            <VueApexCharts
                type="donut"
                height="350"
                :options="chartOptions"
                :series="series"
            ></VueApexCharts>
        </q-card-section>
    </q-card>
</template>

<style scoped></style>
