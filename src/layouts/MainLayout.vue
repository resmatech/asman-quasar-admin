<script setup>
import { ref } from "vue";
import NavigationMenu from "components/navigation/NavigationMenu.vue";
import ApplicationLogo from "components/ApplicationLogo.vue";
import {
    outlinedBarChart,
    outlinedDarkMode,
    outlinedDashboard,
    outlinedGroup,
    outlinedGroupWork,
    outlinedHowToReg,
    outlinedLightMode,
    outlinedLogin,
    outlinedPersonAdd,
    outlinedQuiz,
    outlinedShield,
    outlinedWidgets,
} from "@quasar/extras/material-icons-outlined";

const navigationItems = [
    {
        title: "Dashboard",
        icon: outlinedDashboard,
        link: "/dashboard",
    },
    {
        title: "Authentication",
        icon: outlinedShield,
        link: "",
        caption: "Pages",
        children: [
            {
                title: "Sign In",
                icon: outlinedLogin,
                link: "/sign-in",
            },
            {
                title: "Register",
                icon: outlinedHowToReg,
                link: "sign-up",
            },
        ],
    },

    {
        title: "Users",
        icon: outlinedGroupWork,
        link: "",
        children: [
            {
                title: "Users List",
                icon: outlinedGroup,
                link: "/users",
            },
            {
                title: "Create User",
                icon: outlinedPersonAdd,
                link: "/users/create",
            },
        ],
    },

    {
        title: "FAQ",
        icon: outlinedQuiz,
        link: "/faq",
    },

    {
        title: "Widgets",
        caption: "Components",
        icon: outlinedWidgets,
        link: "/widgets",
    },

    {
        title: "Charts",
        icon: outlinedBarChart,
        link: "/charts",
    },
];
const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<template>
    <q-layout
        view="lHh Lpr lFf"
        :class="$q.dark.isActive ? 'bg-dark-page' : 'bg-light-page'"
    >
        <q-header
            class="q-py-sm"
            :class="
                $q.dark.isActive ? 'bg-darker text-light' : 'bg-white text-dark'
            "
        >
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    icon="menu"
                    aria-label="Menu"
                    @click="toggleLeftDrawer"
                />

                <div class="q-ml-md">
                    <q-input
                        v-model="search"
                        style="width: 400px"
                        label="Search"
                        dense
                        :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'"
                        clearable
                        debounce="300"
                        outlined
                        type="text"
                    >
                    </q-input>
                </div>
                <q-space />
                <div class="flex items-center q-gutter-x-md">
                    <q-btn
                        color="primary"
                        :icon="
                            $q.dark.isActive
                                ? outlinedDarkMode
                                : outlinedLightMode
                        "
                        round
                        flat
                        @click="() => $q.dark.toggle()"
                    />

                    <q-item clickable v-ripple>
                        <q-item-section side>
                            <q-item-label>Rebwar Mustafa</q-item-label>
                            <q-item-label caption>Administrator</q-item-label>
                        </q-item-section>
                        <q-item-section>
                            <q-avatar round size="36px">
                                <img
                                    src="https://cdn.quasar.dev/img/avatar4.jpg"
                                />
                            </q-avatar>
                        </q-item-section>
                    </q-item>
                </div>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" class="bg-dark" show-if-above>
            <q-list>
                <q-item-label
                    class="flex items-center justify-center text-h6 text-bold q-mb-md q-pa-md"
                    header
                >
                    <ApplicationLogo :height="40" :width="100" />
                </q-item-label>
                <NavigationMenu :items="navigationItems" />
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view class="q-mx-auto" style="max-width: 1536px" />
        </q-page-container>
    </q-layout>
</template>
