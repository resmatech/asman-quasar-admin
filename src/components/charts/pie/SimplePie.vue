<script setup>
import VueApexCharts from "vue3-apexcharts";

const series = [44, 55, 13, 43, 22];

const chartOptions = {
    chart: {
        width: 380,
        type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
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
                type="pie"
                height="350"
                :options="chartOptions"
                :series="series"
            ></VueApexCharts>
        </q-card-section>
    </q-card>
</template>

<style scoped></style>
