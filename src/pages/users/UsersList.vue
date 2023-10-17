<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import {
    outlinedFemale,
    outlinedMale,
    outlinedHome,
    outlinedPeople,
} from "@quasar/extras/material-icons-outlined";
import { useI18n } from "vue-i18n";
import { useQuasar } from "quasar";
import FilterDataDialog from "components/datatable/FilterDataDialog.vue";
import ExportDataToCsv from "components/datatable/ExportDataToCsv.vue";
import NoData from "components/NoData.vue";
const $q = useQuasar();
const isLoading = ref(false);
const users = ref([]);
const { t } = useI18n();
const search = ref("");

function searchData(value) {
    if (!value) {
        return fetchUsers();
    }
    isLoading.value = true;
    axios
        .get("https://dummyjson.com/users/search?q=" + value)
        .then((response) => {
            users.value = response.data.users;
            isLoading.value = false;
        })
        .catch((error) => {
            console.log(error.response);
        });
}
function fetchUsers() {
    isLoading.value = true;
    axios
        .get("https://dummyjson.com/users")
        .then((response) => {
            users.value = response.data.users;
            isLoading.value = false;
        })
        .catch((error) => {
            console.log(error.response);
        });
}

const columns = [
    { name: "id", align: "center", label: "ID", field: "id" },
    { name: "name", align: "left", label: "Name" },
    {
        name: "company",
        align: "left",
        label: "Company",
        field: (row) => row.company.name,
    },
    {
        name: "department",
        align: "left",
        label: "Department",
        field: (row) => row.company.department,
    },
    { name: "contact", align: "left", label: "Contact" },
    { name: "gender", align: "left", label: "Gender" },
    { name: "address", align: "left", label: "Address" },
    { name: "actions", align: "left", label: "Actions" },
];
onMounted(() => {
    fetchUsers();
});
</script>

<template>
    <q-page padding>
        <h6 class="q-my-none text-h6 text-bold">Users List</h6>
        <q-breadcrumbs align="left">
            <q-breadcrumbs-el label="Main" />
            <q-breadcrumbs-el label="Users" />
            <q-breadcrumbs-el label="List" />
        </q-breadcrumbs>

        <div class="row items-center justify-between q-py-md q-mt-md">
            <div class="text-h5 text-bold">Registered Users</div>
            <q-btn
                color="primary"
                unelevated
                label="Create new user"
                to="users/create"
            />
        </div>
        <q-table
            :rows="users"
            :columns="columns"
            row-key="name"
            :loading="isLoading"
            :rows-per-page-options="[15]"
        >
            <template v-slot:top>
                <div
                    class="row flex items-center justify-between q-pa-md full-width rounded-borders"
                    :class="$q.dark.isActive ? 'bg-darker' : 'bg-light'"
                >
                    <q-input
                        v-model="search"
                        @update:model-value="searchData"
                        label="Search"
                        class="col-12 col-sm-4 rounded-borders"
                        :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'"
                        clearable
                        debounce="300"
                        outlined
                        dense
                        type="text"
                    >
                        <template v-slot:append>
                            <q-icon name="search" color="blue-grey-7" />
                        </template>
                    </q-input>

                    <div class="row items-center q-gutter-sm">
                        <ExportDataToCsv :columns="columns" :rows="users" />
                        <FilterDataDialog></FilterDataDialog>
                    </div>
                </div>
            </template>

            <template v-slot:body-cell-name="props">
                <q-td :props="props">
                    <div
                        class="row q-col-gutter-x-md items-center justify-start no-wrap"
                    >
                        <div>
                            <q-avatar color="light">
                                <img :src="props.row.image" />
                            </q-avatar>
                        </div>
                        <div class="text-left">
                            <div class="text-weight-medium">
                                {{
                                    props.row.firstName +
                                    " " +
                                    props.row.lastName
                                }}
                            </div>
                            <div class="text-blue-grey-7 q-mt-xs">
                                {{ props.row.company.title }}
                            </div>
                        </div>
                    </div>
                </q-td>
            </template>

            <template v-slot:body-cell-department="props">
                <q-td :props="props">
                    <q-badge
                        :color="props.row.eyeColor.toLowerCase()"
                        rounded
                        class="q-mr-xs"
                    />
                    {{ props.row.company.department }}
                </q-td>
            </template>

            <template v-slot:body-cell-contact="props">
                <q-td :props="props">
                    <div class="text-weight-medium">
                        {{ props.row.email }}
                    </div>
                    <div class="text-blue-grey-7 q-mt-xs">
                        {{ props.row.phone }}
                    </div>
                </q-td>
            </template>

            <template v-slot:body-cell-gender="props">
                <q-td :props="props">
                    <q-chip
                        class="text-capitalize"
                        color="blue-1"
                        text-color="blue-9"
                        :icon="outlinedMale"
                        size="13px"
                        v-if="props.row.gender == 'male'"
                    >
                        {{ props.row.gender }}
                    </q-chip>
                    <q-chip
                        class="text-capitalize"
                        color="pink-1"
                        size="13px"
                        text-color="pink-9"
                        :icon="outlinedFemale"
                        v-if="props.row.gender == 'female'"
                    >
                        {{ props.row.gender }}
                    </q-chip>
                </q-td>
            </template>

            <template v-slot:body-cell-address="props">
                <q-td :props="props">
                    <div class="text-weight-medium">
                        {{ props.row.address.address }}
                    </div>
                    <div class="text-blue-grey-7 q-mt-xs">
                        {{
                            props.row.address.city +
                            ", " +
                            props.row.address.state +
                            "  " +
                            props.row.address.postalCode
                        }}
                    </div>
                </q-td>
            </template>

            <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                    <div class="flex no-wrap">
                        <q-btn flat icon="more_vert" round>
                            <q-menu>
                                <q-list dense style="min-width: 150px">
                                    <q-item clickable>
                                        <q-item-section
                                            >View user
                                        </q-item-section>
                                    </q-item>

                                    <q-item clickable>
                                        <q-item-section>Edit </q-item-section>
                                    </q-item>

                                    <q-separator />

                                    <q-item clickable>
                                        <q-item-section> Delete</q-item-section>
                                    </q-item>
                                </q-list>
                            </q-menu>
                        </q-btn>
                    </div>
                </q-td>
            </template>

            <template v-slot:no-data="{ message }">
                <div
                    class="full-width flex-center text-body1 column q-gutter-sm q-py-xl"
                >
                    <NoData />
                    <span class="q-mt-lg">
                        Well this is sad... {{ message }}
                    </span>
                </div>
            </template>
            <template v-slot:loading>
                <q-inner-loading showing color="primary" />
            </template>
        </q-table>
    </q-page>
</template>

<style scoped></style>
