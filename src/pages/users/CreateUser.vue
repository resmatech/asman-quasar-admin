<script setup>
import { ref } from "vue";
import NewUserIllustration from "assets/new-user-illustration.svg";
const formData = ref({});
</script>

<template>
    <q-page padding>
        <h6 class="q-my-none text-h6 text-bold">Create User</h6>
        <q-breadcrumbs align="left">
            <q-breadcrumbs-el label="Main" />
            <q-breadcrumbs-el label="Users" />
            <q-breadcrumbs-el label="Create" />
        </q-breadcrumbs>

        <div class="row items-center justify-between q-py-md q-mt-md">
            <div class="text-h5 text-bold">Create User</div>
        </div>

        <q-card>
            <q-card-section class="q-pa-none">
                <div class="row">
                    <div class="col-12 col-md-6 q-px-lg q-py-lg">
                        <div class="row q-col-gutter-lg">
                            <div class="col-6">
                                <q-input
                                    v-model="formData.firstName"
                                    outlined
                                    standout
                                    label="First Name"
                                />
                            </div>
                            <div class="col-6">
                                <q-input
                                    v-model="formData.lastName"
                                    outlined
                                    standout
                                    label="Last Name"
                                />
                            </div>
                        </div>

                        <div class="row q-mt-lg">
                            <div class="col">
                                <q-input
                                    v-model="formData.email"
                                    outlined
                                    standout
                                    label="Email"
                                />
                            </div>
                        </div>

                        <div class="row q-mt-lg">
                            <div class="col">
                                <q-input
                                    outlined
                                    v-model="formData.dob"
                                    label="Date of birth"
                                    hide-bottom-space
                                    mask="date"
                                >
                                    <template v-slot:append>
                                        <q-icon
                                            name="event"
                                            class="cursor-pointer"
                                        >
                                            <q-popup-proxy
                                                cover
                                                transition-show="scale"
                                                transition-hide="scale"
                                            >
                                                <q-date v-model="formData.dob">
                                                    <div
                                                        class="row items-center justify-end"
                                                    >
                                                        <q-btn
                                                            v-close-popup
                                                            label="Close"
                                                            color="primary"
                                                            flat
                                                        />
                                                    </div>
                                                </q-date>
                                            </q-popup-proxy>
                                        </q-icon>
                                    </template>
                                </q-input>
                            </div>
                        </div>

                        <div class="row q-col-gutter-x-lg q-mt-lg">
                            <div class="col">
                                <q-input
                                    v-model="formData.address"
                                    outlined
                                    standout
                                    label="Address"
                                />
                            </div>
                        </div>

                        <div class="row q-col-gutter-x-lg q-my-lg">
                            <div class="col">
                                <q-input
                                    v-model="formData.city"
                                    outlined
                                    standout
                                    label="City"
                                />
                            </div>
                            <div class="col">
                                <q-input
                                    v-model="formData.postal_code"
                                    outlined
                                    standout
                                    label="Postal Code"
                                />
                            </div>
                            <div class="col">
                                <q-input
                                    v-model="formData.state"
                                    outlined
                                    standout
                                    label="State"
                                />
                            </div>
                        </div>

                        <q-separator spaced />

                        <div class="row q-col-gutter-x-lg q-mt-lg">
                            <div class="col">
                                <q-input
                                    v-model="formData.compant"
                                    outlined
                                    standout
                                    label="Company"
                                />
                            </div>
                        </div>
                        <div class="row q-col-gutter-x-lg q-my-lg">
                            <div class="col">
                                <q-select
                                    outlined
                                    v-model="formData.department"
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
                            </div>
                            <div class="col">
                                <q-select
                                    outlined
                                    v-model="formData.title"
                                    clearable
                                    :options="[
                                        'Help Desk Operator',
                                        'Mechanical System Engineer',
                                        'Web Developer',
                                        'Sales Engineer',
                                        'Operation Manager',
                                    ]"
                                    label="Title"
                                />
                            </div>
                        </div>

                        <q-separator spaced />

                        <div class="row q-gutter-x-md q-mt-md">
                            <q-btn unelevated color="primary" label="Create" />

                            <q-btn
                                unelevated
                                outline
                                color="primary"
                                label="Create and Create Another"
                            />

                            <q-btn
                                unelevated
                                flat
                                color="negative"
                                label="Cancel"
                            />
                        </div>
                    </div>

                    <div
                        class="col-12 col-md-6 flex flex-center rounded-borders bg-light"
                        style="
                            border-top-left-radius: 0;
                            border-bottom-left-radius: 0;
                        "
                    >
                        <img width="500" :src="NewUserIllustration" />
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<style scoped></style>
