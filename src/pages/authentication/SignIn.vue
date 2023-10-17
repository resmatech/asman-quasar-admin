<script setup>
import { ref } from "vue";
import ApplicationLogo from "components/ApplicationLogo.vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const formData = ref({
    email: null,
    password: null,
    remember_me: false,
});
const showPassword = ref(false);

function signIn() {
    // Sign In
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
                    Sign in to your account
                </p>
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
                                        ? 'visibility'
                                        : 'visibility_off'
                                "
                                class="cursor-pointer"
                                @click="showPassword = !showPassword"
                            />
                        </template>
                    </q-input>
                </q-card-section>

                <q-card-section class="q-py-none">
                    <q-checkbox
                        v-model="formData.remember_me"
                        label="Remember me"
                    />
                </q-card-section>

                <q-card-section>
                    <q-btn
                        label="Sign in"
                        class="full-width"
                        color="primary"
                        unelevated
                        @click="signIn"
                    />
                </q-card-section>

                <q-separator spaced />

                <q-card-section
                    class="flex column justify-center items-center q-py-none"
                >
                    <q-btn
                        color="primary"
                        flat
                        no-caps
                        dense
                        label="Forgot password"
                        to="forgot-passowrd"
                    />
                    <div>
                        Don't have account
                        <q-btn
                            color="primary"
                            flat
                            dense
                            no-caps
                            label="Sign up"
                            to="sign-up"
                        />
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<style scoped></style>
