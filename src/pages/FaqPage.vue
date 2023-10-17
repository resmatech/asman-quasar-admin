<script setup>
import { ref } from "vue";
import AccordionItems from "components/faq/AccordionItems.vue";
const tab = ref("subscription");
const splitterModel = ref(20);
const search = ref("");
</script>

<template>
    <q-page padding>
        <h6 class="q-my-none text-h6 text-bold">FAQ</h6>
        <q-breadcrumbs align="left">
            <q-breadcrumbs-el label="Main" />
            <q-breadcrumbs-el label="FAQ" />
        </q-breadcrumbs>

        <q-card class="q-mt-lg q-py-md">
            <q-card-section class="column flex-center">
                <div class="text-h5 text-bold q-mb-md">How can we help?</div>
                <div class="text-subtitle2 text-center" style="width: 450px">
                    Please enter your question in the input provided below, or
                    browse through the categories below to discover answers to
                    common inquiries.
                </div>
                <q-input
                    v-model="search"
                    style="width: 400px"
                    label="Ask a question"
                    class="q-mt-md"
                    :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'"
                    clearable
                    debounce="300"
                    outlined
                    type="text"
                >
                </q-input>
            </q-card-section>
        </q-card>

        <q-splitter
            v-model="splitterModel"
            class="q-mt-lg"
            :separator-class="$q.dark.isActive ? 'bg-dark' : 'bg-light'"
        >
            <template v-slot:before>
                <q-tabs
                    v-model="tab"
                    vertical
                    indicator-color="transparent"
                    class="text-primary"
                    active-class="bg-primary text-white rounded-borders"
                    style="width: 250px"
                >
                    <q-tab name="subscription" label="Subscription" />
                    <q-tab name="pricing" label="Pricing" />
                    <q-tab name="orders" label="Orders" />
                    <q-tab name="products" label="Products" />
                </q-tabs>
            </template>

            <template v-slot:after>
                <q-tab-panels
                    v-model="tab"
                    animated
                    swipeable
                    vertical
                    transition-prev="jump-up"
                    transition-next="jump-up"
                    class="rounded-borders"
                    :class="$q.dark.isActive ? 'bg-dark' : 'bg-light'"
                >
                    <q-tab-panel name="subscription">
                        <div class="text-h4 q-mb-md">Subscription</div>
                        <AccordionItems></AccordionItems>
                    </q-tab-panel>

                    <q-tab-panel name="pricing">
                        <div class="text-h4 q-mb-md">Pricing</div>
                        <div class="row q-col-gutter-lg">
                            <div class="col-12 col-md-6">
                                <AccordionItems></AccordionItems>
                            </div>
                            <div class="col-12 col-md-6">
                                <AccordionItems></AccordionItems>
                            </div>
                        </div>
                    </q-tab-panel>

                    <q-tab-panel name="orders">
                        <div class="text-h4 q-mb-md">Orders</div>
                        <div class="row q-col-gutter-lg">
                            <div class="col-12 col-md-4">
                                <AccordionItems></AccordionItems>
                            </div>
                            <div class="col-12 col-md-4">
                                <AccordionItems></AccordionItems>
                            </div>
                            <div class="col-12 col-md-4">
                                <AccordionItems></AccordionItems>
                            </div>
                        </div>
                    </q-tab-panel>
                    <q-tab-panel name="products">
                        <div class="text-h4 q-mb-md">Products</div>
                        <div class="row q-col-gutter-lg">
                            <div class="col-12 col-md-6">
                                <AccordionItems></AccordionItems>
                            </div>
                            <div class="col-12 col-md-6">
                                <AccordionItems></AccordionItems>
                            </div>
                            <div class="col-12 col-md-6">
                                <AccordionItems></AccordionItems>
                            </div>
                            <div class="col-12 col-md-6">
                                <AccordionItems></AccordionItems>
                            </div>
                        </div>
                    </q-tab-panel>
                </q-tab-panels>
            </template>
        </q-splitter>
    </q-page>
</template>
