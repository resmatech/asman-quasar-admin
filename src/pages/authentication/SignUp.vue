<script setup>
import {
    outlinedVisibility,
    outlinedVisibilityOff,
} from "@quasar/extras/material-icons-outlined";
import { ref } from "vue";
import ApplicationLogo from "components/ApplicationLogo.vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const formData = ref({
    name: null,
    email: null,
    password: null,
    terms: false,
});
const showPassword = ref(false);
function signUp() {
    // sign up
}
</script>

<template>
    <div
        class="row window-height flex-center"
        :class="$q.dark.isActive ? 'bg-dark-page' : 'bg-light-page'"
    >
        <div class="col column items-center relative-position">
            <ApplicationLogo :height="100" :width="200" color="#0284c7" />

            <q-card
                class="q-pa-md relative-position q-mt-xl"
                style="min-width: 400px"
            >
                <p class="text-h5 q-py-md text-weight-bold text-center">
                    Create a new account
                </p>

                <q-card-section>
                    <q-input
                        v-model="formData.name"
                        outlined
                        standout
                        label="Name"
                    />
                </q-card-section>

                <q-card-section>
                    <q-input
                        v-model="formData.email"
                        outlined
                        standout
                        label="Email"
                    />
                </q-card-section>
                <q-card-section>
                    <q-input
                        v-model="formData.password"
                        outlined
                        standout
                        label="Password"
                        :type="showPassword ? 'text' : 'password'"
                    >
                        <template v-slot:append>
                            <q-icon
                                :name="
                                    showPassword
                                        ? outlinedVisibility
                                        : outlinedVisibilityOff
                                "
                                class="cursor-pointer"
                                @click="showPassword = !showPassword"
                            />
                        </template>
                    </q-input>
                </q-card-section>

                <q-card-section class="q-py-none">
                    <q-checkbox v-model="formData.terms">
                        <span class="">I agree to privacy policy & terms </span>
                    </q-checkbox>
                </q-card-section>

                <q-card-section>
                    <q-btn
                        label="Sign up"
                        class="full-width"
                        color="primary"
                        unelevated
                        @click="signUp"
                    />
                </q-card-section>

                <q-separator spaced />

                <q-card-section
                    class="flex column justify-center items-center q-py-none"
                >
                    <div>
                        Already have an account
                        <q-btn
                            color="primary"
                            flat
                            dense
                            no-caps
                            label="Sign in"
                            to="sign-in"
                        />
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<style scoped></style>
